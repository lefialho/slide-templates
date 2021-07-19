import { Slide } from "./slide";
import { slides } from "./helper";

export async function renderSlides(slide) {
  try {
    const response = await fetch('http://localhost:3000/slide');
    const data = await response.json();
    const { template1, template2, template3, template4 } = data;

    if (slide === template1.id) {
      const { img, texts } = template1;
      slides.template01(img, texts);
      new Slide(template1.id);
    }
    if (slide === template2.id) {
      const { data } = template2
      slides.template02(data);
      new Slide(template2.id);
    }
    if (slide === template3.id) {
      const { img, texts } = template3;
      slides.template03(img, texts);
      new Slide(template3.id);
    }
    if (slide === template4.id) {
      const { data } = template4;
      slides.template04(data);
      new Slide(template4.id);
    }
  }
  catch (error) {
    console.log(error);
  }
}

