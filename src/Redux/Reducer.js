export const SidebarExpanded = (
    state = false,
    { type, payload }
  ) => {
    switch (type) {
      case "OpenSidebar":
        return payload;
      case "CloseSidebar":
        return payload;
      default:
        return state;
    }
  };