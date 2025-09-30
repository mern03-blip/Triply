import { Select } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import "./pagination.scss"
// 1. Accept props from the parent component
const CustomPagination = ({
  currentPage,
  pageSize,
  totalItems,
  onPageChange,
  onPageSizeChange,
}) => {

  // 2. Calculate dynamic values based on props
  const totalPages = Math.ceil(totalItems / pageSize);
  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  return (
    <>
      <div className="font-custom w-full border-t border-primaryColor/50 flex items-center justify-between text-primaryTextColor text-h6  font-b5">

        {/* Left Section: Items per page */}
        <div className="flex items-center gap-4 p-4 font-b4 text-blackColor">
          <span>Items per page:</span>
          {/* 3. Make the Select component functional */}
          <Select
            value={pageSize}
            onChange={onPageSizeChange} // Call parent function on change
            className="pagination-select"
          >
            <Select.Option value={12}>12</Select.Option>
            <Select.Option value={24}>24</Select.Option>
            <Select.Option value={36}>36</Select.Option>
          </Select>
        </div>

        {/* Middle Section: Item Count */}
        <div className="border-l border-primaryColor/50 font-b4 text-[#8A8A8A] h-16 flex items-center px-6">
          {/* 4. Display dynamic item count */}
          <span>{startItem} - {endItem} of {totalItems} items</span>
        </div>

        {/* Right Section: Page Navigation */}
        <div className="flex-grow flex items-center justify-end gap-6 border-l border-primaryColor/50 h-16 px-4">
          <div className="flex items-center gap-2">
            {/* 5. Make the page jumper Select functional */}
            <Select
              value={currentPage}
              onChange={onPageChange} // Call parent function on change
              className="pagination-select page-jumper"
            >
              {/* Generate page numbers dynamically */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <Select.Option key={page} value={page}>
                  {String(page).padStart(2, '0')}
                </Select.Option>
              ))}
            </Select>
            <span className='font-b4 text-[#8A8A8A]'>of {String(totalPages).padStart(2, '0')} pages</span>
          </div>

          <div className="flex items-center gap-4">
            {/* 6. Make navigation buttons functional and add disabled state */}
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="text-primaryTextColor hover:text-t1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <LeftOutlined />
            </button>
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="text-primaryTextColor hover:text-t1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <RightOutlined />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomPagination;