import "../styles/main.css";
import HelloWorld from "../scripts/app";

declare var H5P: any;

// Load library
H5P = H5P || {};
H5P.HelloWorld = HelloWorld;