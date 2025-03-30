import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
import { FadeIn } from "./FadeIn";

interface Urn {
  id: number;
  image: string;
}

const urns: Urn[] = [
  { id: 1, image: "/images/urns/basic_urn.avif" },
  { id: 2, image: "/images/urns/japanese_urn.avif" },
  { id: 3, image: "/images/urns/star_urn.avif" },
  { id: 4, image: "/images/urns/dog_urn.avif" },
  { id: 5, image: "/images/urns/column_urn.avif" },
  { id: 6, image: "/images/urns/flat_urn.avif" },
  { id: 7, image: "/images/urns/bottle_urn.avif" },
  { id: 8, image: "/images/urns/aladin_urn.avif" },
  { id: 9, image: "/images/urns/sima_urn.avif" },
  { id: 10, image: "/images/urns/rampante_urn.avif" },
  { id: 11, image: "/images/urns/big_rampante_urn.avif" },
];

const UrnsSwiper = () => {
  const { t } = useTranslation();

  return (
    <section id="urns" className="py-12 md:py-20 bg-secondary/50">
      <div className="container max-w-5xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold text-primary mb-4">
            {t("urns.title")}
          </h2>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="text-gray-700 mb-10 text-lg">{t("urns.description")}</p>
        </FadeIn>
        <FadeIn>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
            className="pb-10"
          >
            {urns.map((urn) => {
              const title = t(`urns.urn${urn.id}.title`);
              const description = t(`urns.urn${urn.id}.description`);
              const price = t(`urns.urn${urn.id}.price`);

              return (
                <SwiperSlide key={urn.id}>
                  <div className=" shadow-lg rounded-xl p-6 flex flex-col items-center transition-transform transform hover:scale-105">
                    <img
                      src={urn.image}
                      alt={title}
                      className="w-full h-64 object-contain "
                    />
                    <h3 className="text-2xl font-semibold text-gray-900 mt-4">
                      {title}
                    </h3>
                    <p className="text-gray-600 text-base mt-2 text-center">
                      {description}
                    </p>
                    <p className="text-lg font-bold text-primary mt-3">
                      {price}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </FadeIn>
      </div>
    </section>
  );
};

export default UrnsSwiper;
