const Skeleton = ({ members }) => {
  return (
    <div>
      <div className="flex animate-pulse flex-wrap -space-x-2">
        {members.map((item, index) => (
          <div className="avatar h-8 w-8" key={index}>
            {item.picture_path ? (
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
