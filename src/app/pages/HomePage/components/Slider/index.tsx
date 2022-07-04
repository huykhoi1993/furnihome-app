/**
 *
 * Slider
 *
 */
import { nanoid } from '@reduxjs/toolkit';
import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, SlideButton, SlideItem, SlideList } from './styled';

interface Props {}

const SLIDERS = [
  {
    id: nanoid(),
    newArrival: true,
    title: 'flexible chair 1',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur quisquam, magnam enim sed debitis perspiciatis.',
    src: 'images/slides/slide_1.jpg',
  },
  {
    id: nanoid(),
    newArrival: true,
    title: 'flexible chair 2',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur quisquam, magnam enim sed debitis perspiciatis.',
    src: 'images/slides/slide_2.jpg',
  },
  {
    id: nanoid(),
    newArrival: false,
    title: 'flexible chair 3',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur quisquam, magnam enim sed debitis perspiciatis.',
    src: 'images/slides/slide_3.jpg',
  },
  {
    id: nanoid(),
    newArrival: false,
    title: 'flexible chair 4',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur quisquam, magnam enim sed debitis perspiciatis.',
    src: 'images/slides/slide_4.jpg',
  },
  {
    id: nanoid(),
    newArrival: true,
    title: 'flexible chair 5',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur quisquam, magnam enim sed debitis perspiciatis.',
    src: 'images/slides/slide_5.jpg',
  },
  {
    id: nanoid(),
    newArrival: true,
    title: 'flexible chair 6',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur quisquam, magnam enim sed debitis perspiciatis.',
    src: 'images/slides/slide_6.jpg',
  },
];

export const Slider = memo((props: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation();

  const prevSlide = () => {
    setCurrentSlide(index => (index - 1 < 0 ? SLIDERS.length - 1 : index - 1));
  };

  const nextSlide = () => {
    setCurrentSlide(index => (index + 1 === SLIDERS.length ? 0 : index + 1));
  };

  return (
    <Container>
      <SlideList>
        {SLIDERS.map((slide, index) => (
          <SlideItem key={slide.id} active={index === currentSlide}>
            <div className="content">
              <span>{slide.newArrival && t('HOME_PAGE.new_arrivals')}</span>
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
              <button className="btn">Contact me!</button>
            </div>
            <div className="image">
              <img src={slide.src} alt="" />
            </div>
          </SlideItem>
        ))}
      </SlideList>

      <SlideButton prev className="fas fa-angle-left" onClick={prevSlide} />
      <SlideButton next className="fas fa-angle-right" onClick={nextSlide} />
    </Container>
  );
});
