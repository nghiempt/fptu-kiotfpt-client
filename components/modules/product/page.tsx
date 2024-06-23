"use client";

import CardProduct from "@/components/common/card-product";
import CategoryMenu from "@/components/common/category-menu";
import { HomeService } from "@/service/home";
import { ProductService } from "@/service/product";
import { Divider, Pagination } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import StarIcon from "@mui/icons-material/Star";
import { useEffect, useState } from "react";

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
  shop: {
    id: number;
    name: string;
    email: string;
    phone: string;
    thumbnail: string;
  };
  [key: string]: any;
}

type CheckedState = {
  [key: string]: boolean;
};

export default function Product() {
  const [value, setValue] = useState([20, 37]);
  const [category, setCategory] = useState<any[]>([]);
  const [brand, setBrand] = useState<BrandItem[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<number[]>([]);
  const [priceRange, setPriceRange] = useState([0, 999999]);
  const [selectedConditions, setSelectedConditions] = useState<number[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [visibleCategories, setVisibleCategories] = useState(4);
  const [features, setFeatures] = useState("");
  const [showAllBrand, setShowAllBrand] = useState(false);
  const [visibleBrand, setVisibleBrand] = useState(4);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [sort, setSort] = useState(""); 

  const valueSort = [
    { value: "popular", label: "Popular" },
    { value: "topDeal", label: "Top Deal" },
    { value: "bestSeller", label: "Best Seller" },
    { value: "official", label: "Official" },
  ];


  useEffect(() => {
    const fetch = async () => {
      const pros = await ProductService.getAllProducts("1", "200");
      if (pros?.result) {
        const sortedProducts = sortProducts(pros.data, sort);
        console.log(pros.data);
        setProducts(sortedProducts);
        setFilteredProducts(sortedProducts);
        filterProducts();
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

  useEffect(() => {}, [value]);

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
    let filtered = products;

    // Filter by category
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product?.category?.id)
      );
    }

    // Filter by brand
    if (selectedBrands.length > 0) {
      filtered = filtered.filter((product) =>
        selectedBrands.includes(product?.brand?.id)
      );
    }

    // Filter by price range
    filtered = filtered.filter(
      (product) =>
        product?.price >= priceRange[0] && product?.price <= priceRange[1]
    );

    // Filter by condition
    if (selectedConditions.length > 0) {
      filtered = filtered.filter((product) =>
        selectedConditions.includes(product?.condition?.id)
      );
    }

    // Filter by rating
    if (selectedRatings.length > 0) {
      filtered = filtered.filter((product) =>
        selectedRatings.includes(product?.rate)
      );
    }

    setFilteredProducts(filtered);
  };
  useEffect(() => {
 
  }, [
    selectedCategories,
    selectedBrands,
    priceRange,
    selectedConditions,
    selectedRatings,
    sort,
    products,
  ]);

  const handleCategoryChange = (id: number) => {
    setSelectedCategories((prev) =>
      prev.includes(id)
        ? prev.filter((category) => category !== id)
        : [...prev, id]
    );
  };

  const handleBrandChange = (id: number) => {
    setSelectedBrands((prev) =>
      prev.includes(id) ? prev.filter((brand) => brand !== id) : [...prev, id]
    );
  };

  const handlePriceRangeChange = (event: any) => {
    const { min, max } = event.target;
    setPriceRange([min, max]);
  };

  const handleConditionChange = (id: number) => {
    setSelectedConditions((prev) =>
      prev.includes(id)
        ? prev.filter((condition) => condition !== id)
        : [...prev, id]
    );
  };

  const handleRatingChange = (rating: number) => {
    setSelectedRatings((prev) =>
      prev.includes(rating)
        ? prev.filter((r) => r !== rating)
        : [...prev, rating]
    );
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
                    <div key={index} className="flex gap-x-2">
                      <input
                        type="checkbox"
                        onChange={() => handleCategoryChange(item?.id)}
                        checked={selectedCategories.includes(item.id)}
                      />
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
                        onChange={() => handleBrandChange(item?.id)}
                        checked={selectedBrands.includes(item?.id)}
                      />
                      <h1>
                        {item?.brand_name}
                      </h1>
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
          </div>
          <div className="w-full flex gap-x-4">
            <div className="w-1/2">
              <h1>Min</h1>
              <input
                className="w-full p-1 outline-none border-gray-300 border rounded-md box-border"
                type="text"
                placeholder="0"
              />
            </div>
            <div className="w-1/2">
              <h1>Max</h1>
              <input
                className="w-full p-1 outline-none border-gray-300 border rounded-md box-border"
                type="text"
                placeholder="999999"
              />
            </div>
          </div>
          <button className="w-full py-2 bg-[rgb(var(--quaternary-rgb))] text-white font-semibold border rounded-[6px] hover:text-[#0015ff] ">
            Apply
          </button>
          <Divider className="pt-2" />
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold pb-2 pt-2 text-[16px]">Condition</h1>
            </div>
            <div className="flex flex-col flex-col-4 gap-2">
              {[
                {
                  id: 1,
                  name: "New",
                },
                {
                  id: 2,
                  name: "Used",
                },
                {
                  id: 3,
                  name: "Refurbished",
                },
              ]?.map((item: any, index: any) => {
                return (
                  <div key={index} className="flex gap-x-2">
                    <input
                      type="checkbox"
                      onChange={() => handleConditionChange(item.id)}
                      checked={selectedConditions.includes(item.id)}
                    />
                    <h1>{item.name}</h1>
                  </div>
                );
              })}
            </div>
          </div>
          <Divider className="pt-2" />
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold pb-2 pt-2 text-[16px]">Rating</h1>
            </div>
            <div className="flex flex-col gap-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div className="flex gap-x-2" key={rating}>
                  <input
                    type="checkbox"
                    onChange={() => handleRatingChange(rating)}
                    checked={selectedRatings.includes(rating)}
                  />
                  <div className="flex">
                    {Array.from({ length: 5 }, (_, index) => (
                      <StarIcon
                        key={index}
                        className={
                          index < rating ? "text-[#FF9017]" : "text-[#D4CDC5]"
                        }
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
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
          <div className="flex gap-x-4 items-center">
            <div className="flex gap-x-2 py-2">
              {[1]?.map((item: any, index: any) => {
                return (
                  <div key={index}>
                    <div className="flex gap-x-2 border-2 border-[rgb(var(--quaternary-rgb))] rounded-md p-1 pl-2">
                      <h1>Samsung</h1>
                      {/* <CloseIcon className="cursor-pointer" /> */}
                    </div>
                  </div>
                );
              })}
            </div>
            <h1 className="text-[rgb(var(--quaternary-rgb))] cursor-pointer font-medium text-[14px]">
              Clear all fillter
            </h1>
          </div>
          <div className="w-full mt-2">
            <div className="w-full grid grid-cols-4 gap-4">
              {products?.map((item: any, index: any) => {
                return (
                  <CardProduct
                    key={index}
                    item={item}
                    index={index}
                    limit={20}
                  />
                );
              })}
            </div>
          </div>

          <div className="w-3/4 flex justify-end gap-x-2 mt-8">
            <Pagination count={10} variant="outlined" shape="rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
