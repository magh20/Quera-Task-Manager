/* eslint-disable no-unused-vars */
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import AddIcon from '@mui/icons-material/Add';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

function EditModal({deleteBoard,id,setEdit}) {

    return (
        <div className="modal">
            <div className="modal-content bg-white w-[166px] h-[144px] flex flex-col items-end p-[12px] gap-[16px] relative border-1 mt-[200px] rounded-lg " style={{ boxShadow: '0px 2px 16px rgba(0, 0, 0, 0.25)' }}>
                <div className="w-[142px] h-[120px] flex flex-col items-start p-0 gap-[12px] flex-shrink-0 order-0 ">
                    <div onClick={()=>{setEdit(true)}} className="w-[142px] h-[21px] flex flex-row justify-end items-center p-0 gap-[8px] flex-shrink-0 order-0 ">
                        <label className="w-[98px] h-[21px] flex-none order-0 font-dana font-normal text-right text-[14px] text-gray-900 ">ویرایش نام ستون</label>
                        <BorderColorOutlinedIcon fontSize='' />
                    </div>
                    <div className="w-[142px] h-[21px] flex flex-row justify-end items-center p-0 gap-[8px] flex-shrink-0 order-0 ">
                        <label className="w-[72px] h-[21px] flex-none order-0 font-dana font-normal text-right text-[14px] text-gray-900 ">افزودن تسک</label>
                        <AddIcon fontSize='' />
                    </div>
                    <div className="w-[142px] h-[21px] flex flex-row justify-end items-center p-0 gap-[8px] flex-shrink-0 order-0 ">
                        <label className="w-[106px] h-[21px] flex-none order-0 font-dana font-normal text-right text-[14px] text-gray-900 ">آرشیو تمام تسک‌ها</label>
                        <ArchiveOutlinedIcon fontSize='' />
                    </div>
                    <div onClick={()=>deleteBoard(id)} className="w-[142px] h-[21px] flex flex-row justify-end items-center p-0 gap-[8px] flex-shrink-0 order-0 ">
                        <label className="w-[67px] h-[21px] flex-none order-0 font-dana font-normal text-right text-[14px] text-gray-900 ">حذف ستون</label>
                        <DeleteOutlinedIcon fontSize='' />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default EditModal;