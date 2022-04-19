import { Slide } from "./slide";
import { slides } from "./helper";

export async function renderSlides(slideTemplate) {
  try {
    const response = await fetch('https://gist.githubusercontent.com/lefialho/7a294063c336bf04bd7a5774ee1d02df/raw/4bb3df8694bf4a8ac340c110390859a8b1ba61fb/slides.json');
    const data = await response.json();
    const { slide } = data;
    console.log(slide)
    const { template1, template2, template3, template4 } = slide;

    if (slideTemplate === template1.id) {
      const { img, texts } = template1;
      slides.template01(img, texts);
      new Slide(template1.id);
    }
    if (slideTemplate === template2.id) {
      const { data } = template2
      slides.template02(data);
      new Slide(template2.id);
    }
    if (slideTemplate === template3.id) {
      const { img, texts } = template3;
      slides.template03(img, texts);
      new Slide(template3.id);
    }
    if (slideTemplate === template4.id) {
      const { data } = template4;
      slides.template04(data);
      new Slide(template4.id);
    }
  }
  catch (error) {
    console.log(error);
  }
}

