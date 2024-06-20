"use client";

import { Divider, Pagination } from "@mui/material";
import React, { useState } from "react";
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
import { useSearchParams } from "next/navigation";

function valuetext(value: any) {
  return `${value}°C`;
}

export default function Product() {

  const searchParam = useSearchParams();

  const [value, setValue] = React.useState([20, 37]);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [visibleCategories, setVisibleCategories] = useState(4);
  const [features, setFeatures] = React.useState("");
  const [showAllBrand, setShowAllBrand] = useState(false);
  const [visibleBrand, setVisibleBrand] = useState(4);
  const [showAllRatings, setShowAllRatings] = useState(false);
  const [visibleRatings, setVisibleRatings] = useState(5);
  const [isChecked, setIsChecked] = useState(false);

  const [products, setProducts] = useState([]);

  const handleChangeFeatures = (event: any) => {
    setFeatures(event.target.value);
  };

  const toggleShowAllRatings = () => {
    setShowAllRatings(!showAllRatings);
    setVisibleRatings(showAllRatings ? 4 : 8);
  };

  const toggleShowAllCategories = () => {
    setShowAllCategories(!showAllCategories);
    setVisibleCategories(showAllCategories ? 4 : 8);
  };

  const toggleShowAllBrand = () => {
    setShowAllBrand(!showAllBrand);
    setVisibleBrand(showAllBrand ? 4 : 8);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  const icon = showAllCategories ? (
    <KeyboardArrowUpIcon />
  ) : (
    <KeyboardArrowDownIcon />
  );

  React.useEffect(() => {
    const fetch = async () => {
      const pros = await ProductService.searchProduct("", "1", "16");
      if (pros?.result) {
        switch (searchParam.get('filter')) {
          case 'discount':
            let tmp: any = [];
            pros?.data?.forEach((item: any) => {
              console.log(item);
              
              if (item?.discount > 0) {
                tmp.push(item);
              }
            });
            setProducts(tmp);
            break;
          default:
            setProducts(pros?.data);
            break;
        }
      }
    }
    fetch();
  }, []);

  return (
    <div className="w-full pb-10 flex flex-col justify-center items-center">
      <CategoryMenu />
      <div className="w-3/4 flex justify-start items-center">
        <h1 className="text-gray-400 text-[14px] pb-4">
          Home / Clothings / Men’s wear / Summer Clothing
        </h1>
      </div>
      <div className="w-3/4 flex gap-5">
        <div className="w-1/4 flex flex-col gap-2 pb-5">
          <Divider className="pt-2" />
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold pb-2 pt-2 text-[16px]">Category</h1>
              <div className="cursor-pointer" onClick={toggleShowAllCategories}>
                {icon}
              </div>
            </div>
            <div className="flex flex-col flex-col-4 gap-2">
              {[
                {
                  id: 1,
                  name: "Clothes",
                  img: 'https://cdn-icons-png.flaticon.com/128/863/863684.png'
                },
                {
                  id: 2,
                  name: "Home Interiors",
                  img: 'https://cdn-icons-png.flaticon.com/128/4635/4635381.png'
                },
                {
                  id: 3,
                  name: "Technology",
                  img: 'https://cdn-icons-png.flaticon.com/128/4257/4257483.png'
                },
                {
                  id: 4,
                  name: "Tools",
                  img: 'https://cdn-icons-png.flaticon.com/128/1086/1086581.png'
                },
              ]?.map((item: any, index: any) => {
                if (index < visibleCategories) {
                  return (
                    <div key={index}>
                      <h1>{item.name}</h1>
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
              <div className="cursor-pointer" onClick={toggleShowAllBrand}>
                {icon}
              </div>
            </div>
            <div className="flex flex-col flex-col-4 gap-2">
              {[
                {
                  id: 1,
                  name: "Samsung",
                  url: 'samsung.com.vn',
                  img: 'https://cdn-icons-png.flaticon.com/128/0/747.png'
                },
                {
                  id: 2,
                  name: "Apple",
                  url: 'apple.com.vn',
                  img: 'https://cdn-icons-png.flaticon.com/128/0/747.png'
                },
                {
                  id: 3,
                  name: "Xiaomi",
                  url: 'xiaomi.com.vn',
                  img: 'https://cdn-icons-png.flaticon.com/128/882/882720.png'
                },
                {
                  id: 4,
                  name: "Oppo",
                  url: 'oppo.com.vn',
                  img: 'https://cdn-icons-png.flaticon.com/128/882/882745.png'
                },
              ]?.map((item: any, index: any) => {
                if (index < visibleBrand) {
                  return (
                    <div key={index} className="flex gap-x-2">
                      <div onClick={handleCheckboxChange}>
                        {isChecked ? (
                          <CheckBoxIcon className="text-[#BDBDBD]" />
                        ) : (
                          <CheckBoxOutlineBlankIcon className="text-[#BDBDBD]" />
                        )}
                      </div>
                      <h1>{item.name}</h1>
                    </div>
                  );
                }
                return null;
              })}
            </div>
            <h1 className="text-[#0D6EFD]" onClick={toggleShowAllBrand}>
              {showAllCategories ? "See less" : "See all"}
            </h1>
          </div>
          <Divider className="pt-2" />
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold pb-2 pt-2 text-[16px]">Price range</h1>
              <div className="cursor-pointer" onClick={toggleShowAllBrand}>
                {icon}
              </div>
            </div>
            <Box>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              />
            </Box>
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
          </div>
          <Divider className="pt-2" />
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold pb-2 pt-2 text-[16px]">Condition</h1>
              <div className="cursor-pointer" onClick={toggleShowAllCategories}>
                {icon}
              </div>
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
                }
              ]?.map((item: any, index: any) => {
                if (index < visibleCategories) {
                  return (
                    <div key={index} className="flex gap-x-2">
                      <div onClick={handleCheckboxChange}>
                        {isChecked ? (
                          <RadioButtonCheckedIcon className="text-[#BDBDBD]" />
                        ) : (
                          <RadioButtonUncheckedIcon className="text-[#BDBDBD]" />
                        )}
                      </div>
                      <h1>{item.name}</h1>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
          <Divider className="pt-2" />
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold pb-2 pt-2 text-[16px]">Rating</h1>
              <div className="cursor-pointer" onClick={toggleShowAllRatings}>
                {icon}
              </div>
            </div>
            <div className="flex flex-col flex-col-4 gap-2">
              <div className="flex gap-x-2">
                <div onClick={handleCheckboxChange}>
                  {isChecked ? (
                    <CheckBoxIcon className="text-[#BDBDBD]" />
                  ) : (
                    <CheckBoxOutlineBlankIcon className="text-[#BDBDBD]" />
                  )}
                </div>
                <div className="flex">
                  <StarIcon className="text-[#FF9017]" />
                  <StarIcon className="text-[#FF9017]" />
                  <StarIcon className="text-[#FF9017]" />
                  <StarIcon className="text-[#FF9017]" />
                  <StarIcon className="text-[#FF9017]" />
                </div>
              </div>
              <div className="flex gap-x-2">
                <div onClick={handleCheckboxChange}>
                  {isChecked ? (
                    <CheckBoxIcon className="text-[#BDBDBD]" />
                  ) : (
                    <CheckBoxOutlineBlankIcon className="text-[#BDBDBD]" />
                  )}
                </div>
                <div className="flex">
                  <StarIcon className="text-[#FF9017]" />
                  <StarIcon className="text-[#FF9017]" />
                  <StarIcon className="text-[#FF9017]" />
                  <StarIcon className="text-[#FF9017]" />
                  <StarIcon className="text-[#D4CDC5]" />
                </div>
              </div>
              <div className="flex gap-x-2">
                <div onClick={handleCheckboxChange}>
                  {isChecked ? (
                    <CheckBoxIcon className="text-[#BDBDBD]" />
                  ) : (
                    <CheckBoxOutlineBlankIcon className="text-[#BDBDBD]" />
                  )}
                </div>
                <div className="flex">
                  <StarIcon className="text-[#FF9017]" />
                  <StarIcon className="text-[#FF9017]" />
                  <StarIcon className="text-[#FF9017]" />
                  <StarIcon className="text-[#D4CDC5]" />
                  <StarIcon className="text-[#D4CDC5]" />
                </div>
              </div>
              <div className="flex gap-x-2">
                <div onClick={handleCheckboxChange}>
                  {isChecked ? (
                    <CheckBoxIcon className="text-[#BDBDBD]" />
                  ) : (
                    <CheckBoxOutlineBlankIcon className="text-[#BDBDBD]" />
                  )}
                </div>
                <div className="flex">
                  <StarIcon className="text-[#FF9017]" />
                  <StarIcon className="text-[#FF9017]" />
                  <StarIcon className="text-[#D4CDC5]" />
                  <StarIcon className="text-[#D4CDC5]" />
                  <StarIcon className="text-[#D4CDC5]" />
                </div>
              </div>
              <div className="flex gap-x-2">
                <div onClick={handleCheckboxChange}>
                  {isChecked ? (
                    <CheckBoxIcon className="text-[#BDBDBD]" />
                  ) : (
                    <CheckBoxOutlineBlankIcon className="text-[#BDBDBD]" />
                  )}
                </div>
                <div className="flex">
                  <StarIcon className="text-[#FF9017]" />
                  <StarIcon className="text-[#D4CDC5]" />
                  <StarIcon className="text-[#D4CDC5]" />
                  <StarIcon className="text-[#D4CDC5]" />
                  <StarIcon className="text-[#D4CDC5]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/4">
          <div className="w-full flex box-border border border-[#E0E0E0] rounded-[6px] my-2 px-2 py-2 items-center gap-x-2">
            <div className="flex w-1/2 pl-2 text-[16px]">
              <h1>Result: 189 items in &nbsp;</h1>
              <h1 className="font-semibold">Samsung</h1>
            </div>
            <div className="w-1/2 flex items-center gap-x-4">
              <div className="flex gap-x-2 w-1/2 justify-end"></div>
              <div className="w-1/2">
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Sort
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={features}
                      label="Features"
                      onChange={handleChangeFeatures}
                    >
                      <MenuItem value={10}>Popular</MenuItem>
                      <MenuItem value={20}>From Low to High</MenuItem>
                      <MenuItem value={30}>From High to Low</MenuItem>
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
                    <div className="flex gap-x-2 border border-2 border-[rgb(var(--quaternary-rgb))] rounded-md p-1 pl-2">
                      <h1>Samsung</h1>
                      <CloseIcon className="cursor-pointer" />
                    </div>
                  </div>
                );
              })}
            </div>
            <h1 className="text-[rgb(var(--quaternary-rgb))] cursor-pointer font-medium text-[14px]">Clear all fillter</h1>
          </div>
          <div className="w-full mt-2">
            <div className="w-full flex grid grid-cols-4 gap-4">
              {products?.map((item: any, index: any) => {
                return (
                  <CardProduct key={index} item={item} index={index} limit={20} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/4 flex justify-end gap-x-2 mt-8">
        <Pagination count={10} variant="outlined" shape="rounded" />
      </div>
    </div>
  );
}
