import React from 'react'

export default function inputinfo({handleSearch}) {



    function filter() {
        let football = document.getElementById('football');
        let basketball = document.getElementById('basketball');
        let tennis = document.getElementById('tennis');
        let input = document.getElementById('name');
        let radio = document.getElementById('radio');
        let radio2 = document.getElementById('radio2');
        let button = document.getElementById('but');
        let countries = document.getElementById('countries');

        if(countries.value != '' && input.value != '' && (radio.checked == true || radio2.checked == true) && (football.checked == true || basketball.checked == true || tennis.checked == true)) {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    }
    
    function empty()
    {
        let input = document.getElementById('name');
        input.value = "";
    }

    return (
        <>
            <form onSubmit={(e) => handleSearch(e)} onChange={filter} className='bg-white shadow-md rounded px-20 pt-5 pb-20'> 
                <label htmlFor="com" className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700'>Full name : </label>
                <input type='text' name='com' id='name' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
                <br />
                
                <div className='flex '>
                    <div className="flex items-center ps-2 border border-gray-200 rounded dark:border-white dark:bg-white">
                    <input type="radio" name='radio' id='radio' value={"male"} className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-white dark:focus:ring-white dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'/>
                    <label htmlFor="radio" className='w-full py-4 ms-2 text-sm font-medium dark:text-gray-700'> male</label>
                    </div>

                    <div className="flex items-center ps-2 border border-gray-200 rounded dark:border-white dark:bg-white">
                    <input type="radio" name='radio' id='radio2' value={"female"} className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-white dark:focus:ring-white dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'/>
                    <label htmlFor="radio2" className='w-full ms-2 text-sm font-medium dark:text-gray-700'> female</label>
                    </div>
                </div>

                <br />
                <label htmlFor="radio" className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700'>Countries : </label>
                <select name="countries" id="countries" className='bg-gray-700 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full p-2.5 dark:bg-white dark:border-gray-700 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-gray-700 dark:focus:border-gray-700'>
                        <option value="">Choose Countries</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Egypt">Egypt</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Algérie">Algérie</option>
                    </select>
                <br />

                {/* box */}
                <div className='radios'>
                <label htmlFor="football" className='md:w-2/3  text-gray-500 font-bold'>Football : </label>
                <input type="checkbox" name="football" id="football" value={"Football"} className='mr-2 leading-tight'/>

                <label htmlFor="basketball" className='md:w-2/3  text-gray-500 font-bold'>Basketball : </label>
                <input type="checkbox" name="basketball" id="basketball" value={"Basketball"}/>

                <label htmlFor="tennis" className='md:w-2/3  text-gray-500 font-bold'>Tennis : </label>
                <input type="checkbox" name="tennis" id="tennis" value={"Tennis"}/>
                </div>
                <br />
                    <textarea id="comment" name='comment' rows="4" class="w-full border border-gray-700 rounded px-0 text-sm text-gray-900 bg-white  dark:bg-white  dark:text-gray-700 dark:placeholder-gray-400" placeholder="Write a comment..." required></textarea>
                <br />
                <button type='submit' id='but' disabled={true} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Submit</button>
            </form>
        </>
    )
}