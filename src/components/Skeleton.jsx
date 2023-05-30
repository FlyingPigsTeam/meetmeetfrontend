const Skeleton = ({ members }) => {
  return (
    <div>
      <div className="flex flex-wrap -space-x-2">
        {members.map((item, index) => (
          <div className="avatar h-8 w-8 hover:z-10" key={index}>
            {item.picture_path  && item.picture_path!="" && item.picture_path!="__"? (
              <img
                className="rounded-full ring ring-white dark:ring-navy-700"
                src={item.picture_path}
                alt="avatar"
              />
            ) : (
              <div className="is-initial rounded-full bg-info text-xs+ uppercase text-white ring ring-white dark:ring-navy-700">
                {item.first_name[0] + item.last_name[0]}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skeleton;



{/* <div class="flex flex-wrap -space-x-2">
    <div class="avatar h-8 w-8 hover:z-10">
      <img
        class="rounded-full ring ring-white dark:ring-navy-700"
        src="images/200x200.png"
        alt="avatar"
      />
    </div>

    <div class="avatar h-8 w-8 hover:z-10">
      <div
        class="is-initial rounded-full bg-info text-xs+ uppercase text-white ring ring-white dark:ring-navy-700"
      >
        jd
      </div> */}
    // </div>