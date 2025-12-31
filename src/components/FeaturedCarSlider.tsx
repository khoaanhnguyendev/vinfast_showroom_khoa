import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ColorPicker } from "@/components/ColorPicker";
import { FeaturedCar, featuredDataCars } from "@/data/featuredCars";
import {
  carExtraExtension,
  carExtraExtensions,
} from "@/data/carExtraExtensions";

export function FeaturedCarSlider() {
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [selectedColors, setSelectedColors] = useState<Record<string, string>>(
  //   {}
  // );

  // // Initialize selected colors (first color for each car) Vinfast
  // useEffect(() => {
  //   const initialColors: Record<string, string> = {};
  //   featuredDataCars.forEach((car) => {
  //     initialColors[car.id] = car.colors[0].code;
  //   });
  //   setSelectedColors(initialColors);
  // }, []);

  // const currentCar = featuredDataCars[currentIndex];
  // const selectedColor =
  //   selectedColors[currentCar?.id] || currentCar?.colors[0]?.code;
  // const currentCarImage = currentCar?.colors.find(
  //   (c) => c.code === selectedColor
  // )?.image;
  const allCars = [...featuredDataCars, ...carExtraExtensions].filter(car => car.isFeatured);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>(
    {}
  );
  useEffect(() => {
    const initialColors: Record<string, string> = {};
    allCars.forEach((car) => {
      initialColors[car.id] = car.colors[0].code;
    });
    setSelectedColors(initialColors);
  }, []);
  const currentCar = allCars[currentIndex];
  const selectedColor =
    selectedColors[currentCar?.id] || currentCar?.colors[0]?.code;
  const currentCarImage = currentCar?.colors.find(
    (c) => c.code === selectedColor
  )?.image;

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % allCars.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + allCars.length) % allCars.length
    );
  };

  const handleColorChange = (carId: string, colorCode: string) => {
    setSelectedColors((prev) => ({ ...prev, [carId]: colorCode }));
  };

  // Calculate billions
  // const formatPrice = (basePrice: string | number) => {
  //   const cleaned = String(basePrice).replace(/[^\d]/g, "");
  //   if (!cleaned) return "";
  //   let num = parseFloat(cleaned);
  //   num = num / 1_000_000;

  //   if (num >= 1000) {
  //     return `${(num / 1000).toFixed(2)} tỷ VNĐ`;
  //   }
  //   return `${num.toLocaleString()} triệu VNĐ`;
  // };

  if (!currentCar) return null;

  return (
    <section className="relative h-[85vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={`${currentIndex}-${selectedColor}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <img
            src={currentCarImage}
            alt={`${currentCar.name} màu ${
              currentCar.colors.find((c) => c.code === selectedColor)?.name
            }`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div
        className="
          relative z-10
          flex items-start

          h-full

          max-h-[50%]

          pt-[clamp(1.5rem,4vh,5rem)]

          /* mobile nhỏ */
          max-[575px]:max-h-[50%]

          /* phablet */
          [@media(min-width:576px)_and_(max-width:767px)]:max-h-[50%]

          /* tablet */
          [@media(min-width:768px)_and_(max-width:991px)]:max-h-[50%]

          /* desktop trở lên giữ nguyên */
          lg:max-h-full
        "
      >

        <div
          className="
            mx-auto max-w-7xl px-4 sm:px-6 lg:px-8
            grid gap-8 items-center

            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-2

            /* ===== xử lý theo HEIGHT ===== */

            /* H-SM + H-MD: ép về 1 cột nếu chiều cao lớn */
            [@media(min-height:721px)_and_(max-height:900px)_and_(max-width:991px)]:grid-cols-1

            /* H-LG */
            [@media(min-height:901px)_and_(max-height:1080px)_and_(max-width:991px)]:grid-cols-1

            /* H-XL */
            [@media(min-height:1081px)_and_(max-width:991px)]:grid-cols-1
          "
        >

          {/* Left: Car Info */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white"
          >
            <div className="flex items-center gap-3 mb-4 max-[639px]:mb-2">
              <h1
                className="
                  font-bold tracking-tight

                  lg:text-6xl
                  md:text-[3rem]

                  max-[639px]:text-[3rem]
                  max-[412px]:text-[1.5rem]
                  max-[412px]:-mt-4
                  max-[639px]:leading-tight
                "
              >
                {currentCar.name}
              </h1>

              {currentCar.isNew && (
                <Badge className="bg-primary text-primary-foreground max-[412px]:-mt-4">
                  Mới
                </Badge>
              )}
            </div>

            <p
              className="
                text-white/90
                lg:text-2xl
                md:text-xl
                max-[639px]:text-3xl
                max-[412px]:text-[1.0rem]
                max-[412px]:-mt-3
                mb-4
                max-[639px]:mb-2
              "
            >
              {currentCar.tagline}
            </p>

            <p
              className="
                text-white/80
                max-w-lg
                mb-6
                max-[412px]:text-[0.75rem]
                max-[412px]:-mt-4
                max-[639px]:text-2xl
              "
            >
              {currentCar.description}
            </p>

            <div className="mb-6 max-[639px]:mb-3">
              <div
                className="
                  font-bold
                  lg:text-3xl
                  max-[412px]:text-base
                  max-[412px]:-mt-4
                  max-[639px]:text-3xl
                "
              >
                {currentCar.basePrice}
              </div>
              <div className="text-white/80 max-[412px]:text-xs max-[639px]:text-2xl">Giá khởi điểm</div>
            </div>

            <div className="mb-8 max-[639px]:mb-4">
              <div className="max-[412px]:text-xs text-white/80 mb-3 max-[639px]:text-2xl">
                Chọn màu sắc:
              </div>

              <ColorPicker
                colors={currentCar.colors}
                selectedColor={selectedColor}
                onColorChange={(colorCode) =>
                  handleColorChange(currentCar.id, colorCode)
                }
              />

              <div className="max-[412px]:text-xs text-white/80 mt-2 max-[639px]:text-2xl">
                {currentCar.colors.find((c) => c.code === selectedColor)?.name}
              </div>
            </div>

            <div className="flex gap-4">
              <Link to="/dat-coc">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-black hover:bg-white/10 max-[412px]:text-lg max-[639px]:text-2xl"
                >
                  Đặt cọc ngay
                </Button>
              </Link>
            </div>
          </motion.div>


          {/* Right: Specs */}
          <motion.div
            key={`specs-${currentIndex}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:justify-self-end max-[991px]:mt-4"
          >
            <div
              className="
                bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/20

                lg:block
                max-[412px]:-mt-7
                max-[991px]:block
                max-[639px]:p-4
              "
            >
              <h3
                className="
                  text-white font-semibold mb-4
                  max-[412px]:-mt-2
                  max-[412px]:text-xl
                  max-[639px]:text-2xl
                "
              >
                Thông số kỹ thuật
              </h3>

              <div className="grid grid-cols-2 gap-4 max-[639px]:gap-3">
                {currentCar.specs.map((spec, index) => (
                  <div key={index} className="text-center max-[412px]:-mt-2">
                    <div
                      className="
                        font-bold text-white
                        lg:text-2xl
                        max-[412px]:text-sm
                        max-[639px]:text-2xl
                        mb-1
                      "
                    >
                      {spec.value}
                    </div>
                    <div className="text-white/70 max-[412px]:text-sm max-[639px]:text-2xl">
                      {spec.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 max-[412px]:-mb-7">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrev}
            className="text-white hover:bg-white/20 border border-white/30 "
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <div className="flex gap-2 ">
            {allCars.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-white"
                    : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="text-white hover:bg-white/20 border border-white/30"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Auto-advance (optional) */}
      <div className="absolute top-4 right-4 z-20">
        <div className="text-white/60 text-sm">
          {currentIndex + 1} / {featuredDataCars.length}
        </div>
      </div>
    </section>
  );
}
