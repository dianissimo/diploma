import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import pic from '../assets/bg1.jpg'


export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={pic}
                        alt="bg1"
                    />
                    <Carousel.Caption className="d-md-flex flex-column h-100 justify-content-center">
                        <h3>
                            <p> Привет! </p>
                            <p> Этот сайт создан специально для того, чтобы весело и интересно изучать алгоритмы на языке Python! </p>
                            <p> Листай карусель, чтобы узнать, что тут есть интересного! </p>
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={pic}
                        alt="bg1"
                    />
                    <Carousel.Caption className="d-md-flex flex-column h-100 justify-content-center">
                        <h3> Кликнув по кнопке "Теория" наверху ты найдешь подробную теорию по многим темам алгоритмов! </h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={pic}
                        alt="bg1"
                    />
                    <Carousel.Caption className="d-md-flex flex-column h-100 justify-content-center">
                        <h3> Кликнув по кнопке "Игры" наверху ты найдешь увлекательные игры, которые помогут тебе в изучении алгоритмов! </h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={pic}
                        alt="bg1"
                    />
                    <Carousel.Caption className="d-md-flex flex-column h-100 justify-content-center">
                        <h3> Давай окунемся в этот интересный мир программирования! </h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}