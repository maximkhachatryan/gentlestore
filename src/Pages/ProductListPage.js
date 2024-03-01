import React from "react";
import Header from "../Components/Header";
import Item from "../Components/Item";

export const ProductListPage = ({ productType }) => {
  const jeansList = [
    {
      id: 1,
      name: "Ջինս բրենդային 29-36",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      sizeChart: {
        29: 1,
        30: 1,
        31: 1,
        32: 2,
        33: 1,
        34: 1,
        36: 1,
      },
      bundleQuantity: 8,
      bundlePrice: 48000,
      variants: [
        {
          code: "1",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
        {
          code: "2",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
        {
          code: "3",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
      ],
    },
    {
      id: 2,
      name: "Ջինս բրենդային 29-36",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      sizeChart: {
        29: 1,
        30: 1,
        31: 1,
        32: 2,
        33: 1,
        34: 1,
        36: 1,
      },
      bundleQuantity: 8,
      bundlePrice: 48000,
      variants: [
        {
          code: "1",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
        {
          code: "2",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
        {
          code: "3",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
      ],
    },
    {
      id: 3,
      name: "Ջինս բրենդային 29-36",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      sizeChart: {
        29: 1,
        30: 1,
        31: 1,
        32: 2,
        33: 1,
        34: 1,
        36: 1,
      },
      bundleQuantity: 8,
      bundlePrice: 48000,
      variants: [
        {
          code: "1",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
        {
          code: "2",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
        {
          code: "3",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
      ],
    },
    {
      id: 4,
      name: "Ջինս բրենդային 29-36",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      sizeChart: {
        29: 1,
        30: 1,
        31: 1,
        32: 2,
        33: 1,
        34: 1,
        36: 1,
      },
      bundleQuantity: 8,
      bundlePrice: 48000,
      variants: [
        {
          code: "1",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
        {
          code: "2",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
        {
          code: "3",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
      ],
    },
  ];
  const shirtList = [
    {
      id: 1,
      name: "Ջինս բրենդային 29-36",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      sizeChart: {
        29: 1,
        30: 1,
        31: 1,
        32: 2,
        33: 1,
        34: 1,
        36: 1,
      },
      bundleQuantity: 8,
      bundlePrice: 48000,
      variants: [
        {
          code: "1",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
        {
          code: "2",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
        {
          code: "3",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
      ],
    },
    {
      id: 2,
      name: "Ջինս բրենդային 29-36",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      sizeChart: {
        29: 1,
        30: 1,
        31: 1,
        32: 2,
        33: 1,
        34: 1,
        36: 1,
      },
      bundleQuantity: 8,
      bundlePrice: 48000,
      variants: [
        {
          code: "1",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
        {
          code: "2",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
        {
          code: "3",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
      ],
    },
    {
      id: 3,
      name: "Ջինս բրենդային 29-36",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      sizeChart: {
        29: 1,
        30: 1,
        31: 1,
        32: 2,
        33: 1,
        34: 1,
        36: 1,
      },
      bundleQuantity: 8,
      bundlePrice: 48000,
      variants: [
        {
          code: "1",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
        {
          code: "2",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
        {
          code: "3",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
      ],
    },
    {
      id: 4,
      name: "Ջինս բրենդային 29-36",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      sizeChart: {
        29: 1,
        30: 1,
        31: 1,
        32: 2,
        33: 1,
        34: 1,
        36: 1,
      },
      bundleQuantity: 8,
      bundlePrice: 48000,
      variants: [
        {
          code: "1",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
        {
          code: "2",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
        {
          code: "3",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
      ],
    },
  ];
  const bloseList = [
    {
      id: 1,
      name: "Ջինս բրենդային 29-36",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      sizeChart: {
        29: 1,
        30: 1,
        31: 1,
        32: 2,
        33: 1,
        34: 1,
        36: 1,
      },
      bundleQuantity: 8,
      bundlePrice: 48000,
      variants: [
        {
          code: "1",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
        {
          code: "2",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
        {
          code: "3",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
      ],
    },
    {
      id: 2,
      name: "Ջինս բրենդային 29-36",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      sizeChart: {
        29: 1,
        30: 1,
        31: 1,
        32: 2,
        33: 1,
        34: 1,
        36: 1,
      },
      bundleQuantity: 8,
      bundlePrice: 48000,
      variants: [
        {
          code: "1",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
        {
          code: "2",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
        {
          code: "3",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
      ],
    },
    {
      id: 3,
      name: "Ջինս բրենդային 29-36",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      sizeChart: {
        29: 1,
        30: 1,
        31: 1,
        32: 2,
        33: 1,
        34: 1,
        36: 1,
      },
      bundleQuantity: 8,
      bundlePrice: 48000,
      variants: [
        {
          code: "1",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
        {
          code: "2",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
        {
          code: "3",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
      ],
    },
    {
      id: 4,
      name: "Ջինս բրենդային 29-36",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      sizeChart: {
        29: 1,
        30: 1,
        31: 1,
        32: 2,
        33: 1,
        34: 1,
        36: 1,
      },
      bundleQuantity: 8,
      bundlePrice: 48000,
      variants: [
        {
          code: "1",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
        {
          code: "2",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
        {
          code: "3",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
      ],
    },
  ];
  const sportList = [
    {
      id: 1,
      name: "Ջինս բրենդային 29-36",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      sizeChart: {
        29: 1,
        30: 1,
        31: 1,
        32: 2,
        33: 1,
        34: 1,
        36: 1,
      },
      bundleQuantity: 8,
      bundlePrice: 48000,
      variants: [
        {
          code: "1",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
        {
          code: "2",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
        {
          code: "3",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
      ],
    },
    {
      id: 2,
      name: "Ջինս բրենդային 29-36",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      sizeChart: {
        29: 1,
        30: 1,
        31: 1,
        32: 2,
        33: 1,
        34: 1,
        36: 1,
      },
      bundleQuantity: 8,
      bundlePrice: 48000,
      variants: [
        {
          code: "1",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
        {
          code: "2",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
        {
          code: "3",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
      ],
    },
    {
      id: 3,
      name: "Ջինս բրենդային 29-36",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      sizeChart: {
        29: 1,
        30: 1,
        31: 1,
        32: 2,
        33: 1,
        34: 1,
        36: 1,
      },
      bundleQuantity: 8,
      bundlePrice: 48000,
      variants: [
        {
          code: "1",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
        {
          code: "2",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
        {
          code: "3",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
      ],
    },
    {
      id: 4,
      name: "Ջինս բրենդային 29-36",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      sizeChart: {
        29: 1,
        30: 1,
        31: 1,
        32: 2,
        33: 1,
        34: 1,
        36: 1,
      },
      bundleQuantity: 8,
      bundlePrice: 48000,
      variants: [
        {
          code: "1",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
        {
          code: "2",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
        {
          code: "3",
          imageUrl:
            "https://wardrobe.com.pk/cdn/shop/products/USPJN085-C.jpg?v=1654947516",
        },
      ],
    },
  ];

  let products;
  switch (productType) {
    case 1:
      products = jeansList;
      break;
    case 2:
      products = shirtList;
      break;
    case 3:
      products = bloseList;
      break;
    case 4:
      products = sportList;
      break;
      
    default:
        products = [];

  }

  let container = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  };

  return (
    <div>
      <Header />
      <div style={container}>
      {products.map((p, index) => {
        return (
            <div><Item product={p} /></div>
        );
      })}
        {/* {
        for (let pr of products) {
            // <div><Item product={pr} /></div>
        }
        }         */}
      </div>
    </div>
  );
};
