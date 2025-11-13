import { apiInitializer } from "discourse/lib/api";
import CategoryHeader from "../components/category-header";

export default apiInitializer((api) => {
  api.renderInOutlet("above-category-heading", CategoryHeader);

  if (settings.show_category_follow_button) {
    const router = api.container.lookup("service:router");

    api.onPageChange(() => {
      const currentURL = router.currentURL || window.location.pathname;
      const onCategory = /^\/c\//.test(currentURL);
      document.body.classList.toggle("ch-bell-relocated", onCategory);
    });
  }
});
