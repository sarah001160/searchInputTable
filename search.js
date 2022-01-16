const tableData = ()=>{ //init中執行
	const searchData = [];
	const tableEl = document.getElementById('portexe-data-table');
	console.log(tableEl.children);
	Array.from(tableEl.children[1].children).forEach( _bodyRowEl=>{ //tbody裡面的tr
		searchData.push(Array.from(_bodyRowEl.children).map(_cellEl=>{
			return _cellEl.innerHTML;//return  value of tr
		}));

	});
	return searchData;
	console.log(searchData);
}



const createSearchInputElement = ()=>{
	const el = document.createElement('input');
	el.classList.add('portexe-search-Input');
	el.id = 'portexe-search-Input';
	return el;
}

const search = (arr, searchTerm)=>{ //在init()中執行searchTerm()
	if(!searchTerm) return arr;
	return arr.filter(_row=>{
		return _row.find(_item=>_item.toLowerCase() //把陣列中的資料
			.includes(searchTerm.toLowerCase())) //與e.target中的資料比對,找出相同者
		//回傳符合的結果
	});

}

const refreshTable= (data)=>{
	const tableBody = document.getElementById('portexe-data-table').children[1];//tbody
	tableBody.innerHTML = '';//先把原本的淨空 再更新

	data.forEach(_row =>{
		const curRow = document.createElement('tr');
		_row.forEach(_dataItem=>{
			const curCell =document.createElement('td');
			curCell.innerText = _dataItem;
			curRow.appendChild(curCell);
		})
		tableBody.appendChild(curRow);
	});

}




const init=()=>{
	document.getElementById('portexe-search-root').appendChild(createSearchInputElement());
    //新增的input在is in the div#portexe-search-root
	const initialTableData = tableData();


	const searchInput = document.getElementById('portexe-search-Input');
	searchInput.addEventListener('keyup', (e)=>{
		//console.log(e.target.value)//取得input裡面的值
		//console.log(search(initialTableData, e.target.value));//執行serachTerm()
		//tableData();//run this
		refreshTable(search(initialTableData, e.target.value))
	});


}

init();

