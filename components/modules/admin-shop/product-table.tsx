import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, TablePagination } from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { limitString } from "@/utils/helper";
import DeleteIcon from '@mui/icons-material/Delete';

function createData(
  product_id: string,
  product_name_vi: string,
  product_name_en: string,
  product_desc_vi: string,
  product_desc_en: string,
  product_image_one: string,
  product_image_two: string,
  product_image_three: string,
  product_image_four: string,
  product_image_five: string,
  product_image_six: string,
  product_category_id: string,
) {
  return {
    product_id,
    product_name_vi,
    product_name_en,
    product_desc_vi,
    product_desc_en,
    product_image_one,
    product_image_two,
    product_image_three,
    product_image_four,
    product_image_five,
    product_image_six,
    product_category_id,
  };
}

export default function ProductTable({ changeProductAndOpenModal }: { changeProductAndOpenModal: any }) {
  const [rows, setRows] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const renderCatColor = (catId: any) => {
    switch (catId.toString()) {
      case '1':
        return 'success'
      case '2':
        return 'error'
      case '3':
        return 'inherit'
      case '4':
        return 'primary'
      case '5':
        return 'secondary'
      case '6':
        return 'info'
      case '7':
        return 'warning'
      default:
        return 'error'
    }
  }

  const renderCatText = (catId: any) => {
    switch (catId.toString()) {
      case '1':
        return 'MACRAME DECORATION'
      case '2':
        return 'HYACINTH DECORATION'
      case '3':
        return 'MACRAME FOR KITCHEN'
      case '4':
        return 'HYACINTH FOR KITCHEN'
      case '5':
        return 'FURNITURE'
      case '6':
        return 'MACRAME FASHION'
      case '7':
        return 'HYACINTH FASHION'
      default:
        return 'error'
    }
  }

  const loadProducs = async () => {
    let tmp: any = [];
    try {
      const response = await fetch('https://ecokav2.devilop.me/api/products/get-all-products');
      const data = await response.json();
      if (data?.length > 0) {
        data?.forEach((item: any) => {
          tmp = [
            ...tmp,
            createData(
              item?.product_id,
              item?.product_name_vi,
              item?.product_name_en,
              item?.product_desc_vi,
              item?.product_desc_en,
              item?.product_image_one,
              item?.product_image_two,
              item?.product_image_three,
              item?.product_image_four,
              item?.product_image_five,
              item?.product_image_six,
              item?.product_category_id,
            )
          ]
        })
        setRows(tmp)
      }
    } catch (err) {
      setRows([])
      return false;
    }
  }

  const renderImage = (originUrl: any) => {
    if (originUrl === null || originUrl === undefined || originUrl === "") {
      return "https://cdn-icons-png.flaticon.com/128/3342/3342137.png"
    }
    const filename = originUrl.split('/').pop();
    return 'https://ecokav2.devilop.me/api/products/images/' + filename;
  }

  const init = async () => {
    loadProducs()
  }

  React.useEffect(() => {
    init()
  }, [])

  React.useEffect(() => { }, [rows])

  return (
    <Paper>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="product">
          <TableHead>
            <TableRow>
              <TableCell align="left">Mã sản phẩm</TableCell>
              <TableCell align="left">Hình ảnh</TableCell>
              <TableCell align="left">Tên sản phẩm (VI)</TableCell>
              <TableCell align="left">Tên sản phẩm (EN)</TableCell>
              <TableCell align="left">Mô tả</TableCell>
              <TableCell align="left">Danh mục</TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row: any) => (
              <TableRow key={row?.product_id}>
                <TableCell align="left">
                  {row?.product_id}
                </TableCell>
                <TableCell align="left">
                  <div className="flex justify-start items-center gap-x-2">
                    <img className="w-[50px] h-[50px] object-cover rounded-md" src={renderImage(row?.product_image_one)} alt="img" />
                  </div>
                </TableCell>
                <TableCell align="left">
                  {row?.product_name_vi}
                </TableCell>
                <TableCell align="left">
                  {row?.product_name_en}
                </TableCell>
                <TableCell align="left">{limitString(row?.product_desc_vi, 70)}</TableCell>
                <TableCell align="left">
                  <Button variant="contained" color={renderCatColor(row?.product_category_id) || 'error'}>
                    {renderCatText(row?.product_category_id)}
                  </Button>
                </TableCell>
                <TableCell align="left">
                  <div onClick={() => changeProductAndOpenModal(row, 'update')}><BorderColorIcon className="text-blue-500 cursor-pointer" /></div>
                </TableCell>
                <TableCell align="left">
                  <div onClick={() => changeProductAndOpenModal(row, 'delete')}><DeleteIcon className="text-red-500 cursor-pointer" /></div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
