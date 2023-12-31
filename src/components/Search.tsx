import { useReloadContext } from "./context/ReloadProvider";

export default function Search({searchMangas} : {searchMangas : any}) {
    const reload = useReloadContext();
    function retrieveFormData(event: any) {
        event.preventDefault();
        const formData = new FormData(event.target)
        const data = { option: formData.get("search_options"), input: formData.get("user_input") }
        if(data.input == ""){ return -1 }
        searchMangas(data);
    }

    function InputValue(event: any) { 
        const value = event.target.value
        if(value == "") {
            reload!.reloadStatus == 0 ? reload!.setReloadStatus(1) : reload!.setReloadStatus(0), 500
        }
    }
    return (
        <>
            <form onSubmit={(event) => retrieveFormData(event)} name="search-bar"className="w-[528px] flex ml-0 mb-2" autoComplete="off" action="">
                <select aria-label="search options" id="search_options" name="search_options" className="h-7 mr-3 rounded w-20 bg-[#0f1114]">
                    <option aria-label="title" value="title">Title</option>
                    <option aria-label="author" value="author">Author</option>
                </select>
                <input onChange={InputValue} name="user_input" placeholder="Enter Title or Author" type="search" className="border-0 rounded w-full h-7 p-2 bg-[#0f1114]"/>
            </form>
        </>
    )
}