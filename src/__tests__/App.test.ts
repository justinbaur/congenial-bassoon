/**
 * @jest-environment jsdom
 */
 import "@testing-library/jest-dom";
 import { render } from "@testing-library/svelte";
 import Navigation from "../components/Navigation.svelte";
 
 jest.mock("svelte-spa-router");
 
 describe("Navigation component", () => {
   test("Show nav", () => {
     render(Navigation);
   });
 });
 