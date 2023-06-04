import React from 'react'
import { useInfiniteQuery } from 'react-query'
import { useIntersection } from '@mantine/hooks'

const posts = [
    { id: 1, title: "post 1" },
    { id: 2, title: "post 2" },
    { id: 3, title: "post 3" },
    { id: 4, title: "post 4" },
    { id: 5, title: "post 5" },
    { id: 6, title: "post 6" },
    { id: 7, title: "post 7" },
    { id: 8, title: "post 8" },
]

const fetchPosts = async (page) => {
    await new Promise(resolve => setTimeout(resolve, 3000))
    return posts.slice((page - 1) * 2, page * 2)
}
const Chatroom = () => {
    const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
        ['history'],
        async ({ pageParam = 1 }) => {
            const response = await fetchPosts(pageParam);
            return response;
        },
        {
            getNextPageParam: (_, pages) => {
                return pages.length + 1
            },
            initialData: {
                pages: [posts.slice(0, 2)],
                pageParams: [1]
            }
        }
    )

    const lastPostRef = React.useRef(null);
    const { ref, entry } = useIntersection({
        root: lastPostRef.current,
        threshold: 1,
    })
    React.useEffect(() => {
        if (entry?.isIntersecting) fetchNextPage()

    }, [entry])

    const _posts = data?.pages.flatMap((page) => page);

    return (
        <div>posts:
            {
                // data?.pages.map((page, i) =>
                //     <div key={i}>

                //         {(
                //             page.map(
                //                 (post) => (<div key={post.id}> {post.title}</div>)
                //             )

                //         )}
                //     </div>
                // )

            }
            {
                _posts.map((post, i) => {
                    if (i === _posts.length - 1)
                        return <div
                            className='h-80'
                            ref={ref}
                            key={post.id}>
                            {post.title}
                        </div>

                    return <div key={post.id}
                        className='h-80'

                    >{post.title}</div>
                })
            }
            <button
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
            >{
                    isFetchingNextPage ? 'Loading more' :
                        (data?.pages.length ?? 0) < 3 ?
                            'Load More' : 'Nothing more to load'
                }

            </button>
        </div>
    )
}

export default Chatroom