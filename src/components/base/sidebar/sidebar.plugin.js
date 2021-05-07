import { programmaticPlugin } from "../../utils";
import Sidebar from "./sidebar.vue";

console.log(Sidebar);
Sidebar.$open = Sidebar.methods.$open;
Sidebar.$toggle = Sidebar.methods.$toggle;

export default programmaticPlugin("sidebar", Sidebar);
