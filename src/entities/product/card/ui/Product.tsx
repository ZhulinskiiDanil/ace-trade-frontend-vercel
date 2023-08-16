import styles from "./styles/main.module.scss";
import { platforms } from "@/common/constants/platforms";

// Types
import { IUser, UserStatus } from "@/entities/user/types";
import { IProductItem, IProduct, ProductPlatform } from "../../types";

// Components
import { ContentSection } from "./ContentSection";
import { ImageSection } from "./ImageSection"

// Decompose to ./types.ts
interface IProductCardProps {
  data: IProduct;
  loading?: boolean;
}

export function ProductCard({ data, loading = false }: IProductCardProps) {
  const date = "2023-06-29T00:25:14.598Z";

  const item: IProductItem = {
    id: "strdasdas",
    title: "TEST",
    description: "Какой шутер или иную игру можно поиграть и расслабиться? Кроме кс и доты? Какой шутер или иную игру можно поиграть и расслабиться? Кроме кс и доты? Какой шутер или иную игру можно поиграть и расслабиться? Кроме кс и доты?",
    images: ["/testImage.png", "/testImage.png"],
    game: {
      id: "123",
      name: "GameName",
      image: "/testImage.png"
    },

    isMain: true,
  };

  const user: IUser = {
    id: 123,
    avatarURL: "/testImage.png",
    status: UserStatus.OFFLINE,
    
    username: "Danil_2022",
    email: "31321@gmail.com",
    emailVerified: true,
    balance: 300,
    frozenBalance: 300,
    
    createdAt: "123",
  };

  const product: IProduct = {
    id: "123",

    deletedAt: date,
    createdAt: date,
    updatedAt: date,
    bumpedAt: date,
    soldAt: date,

    author: user,
    buyer: null,

    platform: platforms[ProductPlatform.STEAM].value,
    price: 100,
    currency: "RUB",

    views: 100,

    items: [item],
  };

  return (
    <div className={styles.product}>
      <ImageSection data={product} className={styles.image} />
      <ContentSection data={product} />
    </div>
  );
}
