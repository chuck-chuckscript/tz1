import {FC, useEffect, useState} from "react";
import {Comment, CommentProps} from "./Comment.tsx";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination} from "swiper/modules";
import style from './comment.module.scss';
import {SwiperOptions} from "swiper/types";

interface CommentListProps{
    list?: CommentProps[]
}
const adaptiveSlider: SwiperOptions['breakpoints'] = {

    280: {
        slidesPerView: 1,
        spaceBetween: 0
    },
    820: {
        slidesPerView: 2,
        spaceBetween: 5
    }
}


export  const CommentList : FC<CommentListProps> = ({list}) => {
    const [isOtherDevice, setIsOtherDevice] = useState<boolean>(false);
    useEffect(() => {

        if(window.innerWidth < 1468){
            setIsOtherDevice(true);
        }

        window.addEventListener('resize', () => {
            if(window.innerWidth < 1468){
                setIsOtherDevice(true);
            }
            else{
                setIsOtherDevice(false);
            }
        })
    }, [])
    return (
        <section className={style.commentList}>
            {
                !isOtherDevice
                    ?
                    <>
                        {list && list.map(comment => <Comment text={comment.text} tagName={comment.tagName} authorName={comment.authorName} image={comment.image} key={comment.id}/>)}
                    </>
                    :
                    <>
                        {
                            list
                            &&
                            <Swiper
                                breakpoints={adaptiveSlider}
                                className={style.slider}
                                direction={'horizontal'}
                                slidesPerView={2}
                                modules={[Pagination]}
                                pagination={true}

                            >
                                {
                                    list.map(comment => <SwiperSlide className={style.slide} key={comment.id}><Comment text={comment.text} tagName={comment.tagName} authorName={comment.authorName} image={comment.image} /></SwiperSlide>)
                                }
                            </Swiper>
                        }
                    </>
            }





        </section>
    );
};

