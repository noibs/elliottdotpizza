"use client";
import styles from "./board.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Pizza {
  num: number;
  name: string;
  desc: string;
  allergens: string;
  img: string;
  price: {
    small: number;
    medium: number;
    large: number;
    [key: string]: number;
  };
}

const Card = ({ pizza }: { pizza: string; containerStyles?: string }) => {
  const [rotation, setRotation] = useState(0);
  const [loading, setLoading] = useState(true);
  const [size, setSize] = useState("medium");
  const [selectedPizza, setSelectedPizza] = useState<Pizza>({
    num: 0,
    name: "",
    desc: "",
    allergens: "",
    img: "",
    price: {
      small: 0,
      medium: 0,
      large: 0,
    },
  });

  useEffect(() => {
    setRotation(Math.floor(Math.random() * 5) - 2.5);

    fetch("./assets/menu.json")
      .then((response) => response.json())
      .then((data) => {
        const pizzaData = data[pizza];
        setSelectedPizza(pizzaData);
      });
  }, [pizza]);

  const handleSize = (size: string) => {
    setSize(size);
    const dropdownContents = document.querySelectorAll("#dropdownContent");
    Array.from(dropdownContents).forEach((dropdownContent) => {
      (dropdownContent as HTMLElement).style.display = "none";
    });
    setTimeout(() => {
      Array.from(dropdownContents).forEach((dropdownContent) => {
        (dropdownContent as HTMLElement).removeAttribute("style");
      });
    }, 1);
  };

  return (
    <main className={`${styles.main}`} style={{ rotate: `${rotation}deg` }}>
      <div className={styles.head}>
        <h2>
          {selectedPizza.num}. {selectedPizza.name}
        </h2>
      </div>
      <div className={styles.mid}>
        <div className={styles.info}>
          <p>{selectedPizza.desc}</p>
          <div className={styles.price}>
            <h3>${selectedPizza.price[size]}</h3>
            <div className={styles.dropdown}>
              <button className={styles.dropbtn}>
                {size.charAt(0).toUpperCase() + size.slice(1)}{" "}
                <i className="fa-regular fa-chevron-down"></i>
              </button>
              <div className={styles.dropdownContent} id="dropdownContent">
                <button
                  className={styles.dropItem}
                  onClick={() => handleSize("small")}
                >
                  {size === "small" ? (
                    <i className="fa-regular fa-check"> </i>
                  ) : (
                    ""
                  )}
                  Small
                </button>
                <button
                  className={styles.dropItem}
                  onClick={() => handleSize("medium")}
                >
                  {size === "medium" ? (
                    <i className="fa-regular fa-check"></i>
                  ) : (
                    ""
                  )}
                  Medium
                </button>
                <button
                  className={styles.dropItem}
                  onClick={() => handleSize("large")}
                >
                  {size === "large" ? (
                    <i className="fa-regular fa-check"></i>
                  ) : (
                    ""
                  )}
                  Large
                </button>
              </div>
            </div>
          </div>
          <button className={styles.addBtn}>Add to Cart</button>
        </div>
        <Image
          src={selectedPizza.img}
          alt={`Photo of a ${selectedPizza.name} pizza`}
          width={400}
          height={400}
        />
      </div>
      <div className={styles.footer}>
        <p>
          <span className={styles.bold}>Allergens:</span>{" "}
          {selectedPizza.allergens}
        </p>
      </div>
    </main>
  );
};

export default Card;
