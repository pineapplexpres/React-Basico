import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { GifExpertApp } from "../GifExpertApp";

describe("Pruebas en <GifExpertApp />", () => {
  test("debe de mostrarse correctamente", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar un conjunto de categorias", () => {
    const categories = ["one punch", "Dragon ball"];

    const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('GifGrid').length).toBe(categories.length)
  });
});
