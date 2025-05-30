"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ChevronLeft, Filter, Plus, Repeat, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"
import ProblemCategorySelect from "@/components/ProblemCategorySelect"

const data: Gov[] = [
  {
    id: "derv1ws0",
    email: 'email@example.com',
    phoneNumber: "0999 999 999",
    concernedGov: "بلدية حلب",
    governorate: "حلب",
    role: 'admin'
  },
  {
    id: "3u1reuv4",
    email: 'email@example.com',
    phoneNumber: "0999 999 999",
    concernedGov: "بلدية حلب",
    governorate: "حلب",
    role: 'حساب عادي'
  },
  {
    id: "m5gr84i9",
    email: 'email@example.com',
    phoneNumber: "0999 999 999",
    concernedGov: "بلدية حلب",
    governorate: "حلب",
    role: 'حساب عادي'
  },
  {
    id: "m5gr84i8",
    email: 'email@example.com',
    phoneNumber: "0999 999 999",
    concernedGov: "بلدية حلب",
    governorate: "حلب",
    role: 'حساب عادي'
  },
  {
    id: "m5gr84i7",
    email: 'email@example.com',
    phoneNumber: "0999 999 999",
    concernedGov: "بلدية حلب",
    governorate: "حلب",
    role: 'حساب عادي'
  },
  {
    id: "m5gr84i6",
    email: 'email@example.com',
    phoneNumber: "0999 999 999",
    concernedGov: "بلدية حلب",
    governorate: "حلب",
    role: 'حساب عادي'
  },
  {
    id: "m5gr84i5",
    email: 'email@example.com',
    phoneNumber: "0999 999 999",
    concernedGov: "بلدية حلب",
    governorate: "حلب",
    role: 'حساب عادي'
  },
  {
    id: "m5gr84i4",
    email: 'email@example.com',
    phoneNumber: "0999 999 999",
    concernedGov: "بلدية حلب",
    governorate: "حلب",
    role: 'حساب عادي'
  },
  {
    id: "5kma53ae",
    email: 'email@example.com',
    phoneNumber: "0999 999 999",
    concernedGov: "بلدية حلب",
    governorate: "حلب",
    role: 'حساب عادي'
  },
  {
    id: "bhqecj4p",
    email: 'email@example.com',
    phoneNumber: "0999 999 999",
    concernedGov: "بلدية حلب",
    governorate: "حلب",
    role: 'حساب عادي'
  }
]

export type Gov = {
  id: string
  email: string
  phoneNumber: string
  concernedGov: string
  governorate: string
  role: string
}

export const columns: ColumnDef<Gov>[] = [
  {
    accessorKey: "email",
    header: "البريد الإلكتروني",
    cell: ({ row }) => (
      <div>{row.getValue("email")}</div>
    ),
  },
  {
    accessorKey: "phoneNumber",
    header: "رقم الهاتف",
    cell: ({ row }) => (
      <div dir="ltr" className="capitalize">{row.getValue("phoneNumber")}</div>
    ),
  },
  {
    accessorKey: "concernedGov",
    header: "الجهة المعنية",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("concernedGov")}</div>
    ),
  },
  {
    accessorKey: "governorate",
    header: "المحافظة",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("governorate")}</div>
    ),
  },
  {
    accessorKey: "role",
    header: "صفة الحساب",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("role")}</div>
    ),
  },
  {
    accessorKey: "details",
    header: "التفاصيل",
    cell: () => (
      <Button className="rounded-none cursor-pointer">
        <h1>التفاصيل</h1>
        <ChevronLeft />
      </Button>
    )
  }
]

export function GovsTable() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[90%] flex flex-col gap-5">

        <Link to='/gov-profile' className="w-[12%]  flex flex-row justify-around items-center cursor-pointer text-white bg-black p-2  rounded-[10px] hover:bg-gray-800">
          <h3 className="text-sm">مستخدم جديد</h3>
          <Plus size={17} />
        </Link>

        <div className="flex flex-col gap-2">
          <h1 className="text-2xl">الجهات المعنية</h1>
          <h3 className="text-sm text-neutral-600 font-light">تستطيع إيجاد كل حسابات الجهات المعنية والتعديل عليها</h3>
        </div>

        <div className="w-full flex flex-row justify-between">
          <div className="w-[50%] flex flex-row gap-5">
            <div className="w-full flex flex-row items-center">
              <Search />
              <Input placeholder="تبحث عن مستخدم معين ..."/>
            </div>
            <ProblemCategorySelect category='أرصفة' />
          </div>
          <div className="w-[50%] flex flex-row gap-5 justify-end">
            <Button className="rounded-none cursor-pointer">
              <h3>تطبيق الفلتر</h3>
              <Filter />
            </Button>
            <Button className="rounded-none cursor-pointer" variant={"outline"}>
              <h3>فتلر افتراضي</h3>
              <Repeat />
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="rounded-md border">
          <Table className="w-full">
            <TableHeader className="rounded-none">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id} className="text-center font-bold">
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>

            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id} className="cursor-pointer">
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="text-center">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    لا يوجد نتائج
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="flex-1 text-sm text-muted-foreground" dir="rtl">
            {table.getFilteredRowModel().rows.length - table.getFilteredRowModel().rows.length + 1} - {table.getFilteredRowModel().rows.length} من{" "} 
            {/* {table.getFilteredRowModel().rows.length} سطر في الصفحة. */}
            50 سطر من العدد الإجمالي.
          </div>
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              السابق
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              التالي
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
