"use client";

import { Divider, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import StarIcon from "@mui/icons-material/Star";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CloseIcon from "@mui/icons-material/Close";
import CardProduct from "@/components/common/card-product";
import CategoryMenu from "@/components/common/category-menu";
import { ProductService } from "@/service/product";
import { HomeService } from "@/service/home";

function valuetext(value: any) {
  return `${value}°C`;
}

interface BrandItem {
  id: number;
  brand_name: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  popular: boolean;
  topDeal: boolean;
  bestSeller: boolean;
  official: boolean;
  brand: { id: number; name: string; thumbnail: string };
  category: { id: number; name: string; thumbnail: string; status: any };
  shop: { id: number; name: string; email: string; phone: string; thumbnail: string };
  [key: string]: any;
}

type CheckedState = {
  [key: string]: boolean;
};

export default function Product() {
  const [value, setValue] = useState([20, 37]);
  const [category, setCategory] = useState<any[]>([]);
  const [brand, setBrand] = useState<BrandItem[]>([]);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [visibleCategories, setVisibleCategories] = useState(4);
  const [features, setFeatures] = useState("");
  const [showAllBrand, setShowAllBrand] = useState(false);
  const [visibleBrand, setVisibleBrand] = useState(4);
  const [checkedState, setCheckedState] = useState<CheckedState>({});
  const [products, setProducts] = useState<Product[]>([]); // Use Product type
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // Use Product type
  const [sort, setSort] = useState(""); // Add state for sorting

  const valueSort = [
    { value: "popular", label: "Popular" },
    { value: "topDeal", label: "Top Deal" },
    { value: "bestSeller", label: "Best Seller" },
    { value: "official", label: "Official" },
  ];

  useEffect(() => {
    setCheckedState(
      brand.reduce((acc, brandItem) => ({ ...acc, [brandItem.id]: false }), {})
    );
  }, [brand]);

  const handleOnChangeBrand = (id: any) => {
    setCheckedState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  useEffect(() => {
    const fetch = async () => {
      const pros = await ProductService.searchProduct("", "1", "16");
      if (pros?.result) {
        const sortedProducts = sortProducts(pros.data, sort);
        setProducts(sortedProducts);
        setFilteredProducts(sortedProducts); // Set initial filtered products to all products
      }
      const b = await ProductService.getAllBrand();
      if (b?.result) {
        setBrand(b?.data);
      }
      const p = await HomeService.getAllCategories();
      if (p?.result) {
        setCategory(p?.data);
      }
    };
    fetch();
  }, [sort]);

  useEffect(() => {
    filterProducts();
  }, [ value, features]);

  const sortProducts = (products: Product[], sortValue: string): Product[] => {
    switch (sortValue) {
      case "popular":
        return products.filter((product) => product.popular === true);
      case "topDeal":
        return products.filter((product) => product.topDeal === true);
      case "bestSeller":
        return products.filter((product) => product.bestSeller === true);
      case "official":
        return products.filter((product) => product.official === true);
      default:
        return products;
    }
  };

  const filterProducts = () => {
    let updatedProducts = [...products];

    // Filter by brand
    const selectedBrands = brand
      .filter((b) => checkedState[b.id])
      .map((b) => b.brand_name);
    if (selectedBrands.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        selectedBrands.includes(product.brand.name)
      );
    }

    // Filter by price range
    updatedProducts = updatedProducts.filter(
      (product) => product.price >= value[0] && product.price <= value[1]
    );

    // Filter by features
    if (features) {
      updatedProducts = updatedProducts.filter(
        (product) => product.type === features
      );
    }

    setFilteredProducts(updatedProducts);
  };

  const handleChangeFeatures = (event: any) => {
    setSort(event.target.value); // Update the sorting state
  };

  const toggleShowAllCategories = () => {
    setShowAllCategories(!showAllCategories);
    setVisibleCategories(showAllCategories ? 4 : category.length);
  };

  const toggleShowAllBrand = () => {
    setShowAllBrand(!showAllBrand);
    setVisibleBrand(showAllBrand ? 4 : brand.length);
  };

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <div className="w-full pb-10 flex flex-col justify-center items-center">
      <CategoryMenu />
      <div className="w-3/4 flex justify-start items-center"></div>
      <div className="w-3/4 flex gap-5">
        <div className="w-1/4 flex flex-col gap-2 pb-5">
          <Divider className="pt-2" />
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold pb-2 pt-2 text-[16px]">Category</h1>
            </div>
            <div className="flex flex-col flex-col-4 gap-2">
              {category?.map((item, index) => {
                if (index < visibleCategories) {
                  return (
                    <div key={index}>
                      <h1>{item?.name}</h1>
                    </div>
                  );
                }
                return null;
              })}
            </div>
            <h1 className="text-[#0D6EFD]" onClick={toggleShowAllCategories}>
              {showAllCategories ? "See less" : "See all"}
            </h1>
          </div>
          <Divider className="pt-2" />
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold pb-2 pt-2 text-[16px]">Brands</h1>
            </div>
            <div className="flex flex-col flex-col-4 gap-2">
              {brand?.map((item, index) => {
                if (index < visibleBrand) {
                  return (
                    <div key={item?.id} className="flex gap-x-2">
                      <input
                        type="checkbox"
                        id={`checkbox-${item?.id}`}
                        checked={checkedState[item?.id]}
                        onChange={() => handleOnChangeBrand(item?.id)}
                      />
                      <label htmlFor={`checkbox-${item?.id}`}>
                        {item?.brand_name}
                      </label>
                    </div>
                  );
                }
                return null;
              })}
            </div>
            <h1 className="text-[#0D6EFD]" onClick={toggleShowAllBrand}>
              {showAllBrand ? "See less" : "See all"}
            </h1>
          </div>
          <Divider className="pt-2" />
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold pb-2 pt-2 text-[16px]">
                Price range
              </h1>
            </div>
            <Box>
              <Slider
                getAriaLabel={() => "Price range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={0}
                max={1000}
              />
            </Box>
          </div>
        </div>
        <div className="w-3/4">
          <div className="w-full flex box-border border border-[#E0E0E0] rounded-[6px] my-2 px-2 py-2 items-center gap-x-2">
            <div className="flex w-1/2 pl-2 text-[16px]">
              <h1>Result: {filteredProducts?.length} items</h1>
            </div>
            <div className="w-1/2 flex items-center gap-x-4">
              <div className="w-1/2">
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="sort-select-label">Sort</InputLabel>
                    <Select
                      labelId="sort-select-label"
                      id="sort-select"
                      value={sort}
                      label="Features"
                      onChange={handleChangeFeatures}
                    >
                      <MenuItem value="">None</MenuItem>
                      <MenuItem value="popular">Popular</MenuItem>
                      <MenuItem value="topDeal">Top Deal</MenuItem>
                      <MenuItem value="bestSeller">Best Seller</MenuItem>
                      <MenuItem value="official">Official</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
            </div>
          </div>
          <div className="w-full mt-2">
            <div className="w-full grid grid-cols-4 gap-4">
              {filteredProducts?.map((item: Product, index: number) => (
                <CardProduct key={index} item={item} index={index} limit={20} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
