import {createSlice} from "@reduxjs/toolkit"


export const sizeSlice = createSlice({
    name:"size",
    initialState:{
        row:1,
        col:1
    },
    reducers:{
        addRow:state =>{
            state.row += 1
        },
        addCol:state=>{
            state.col += 1
        }
    }
    

})

export const selectRow = (state)=>{
    console.log("row count:",state.size.row);
    return state.size.row;
}

export const selectCol = (state)=>{
    console.log("col count",state.size.col);
    return state.size.col;
}

export default sizeSlice.reducer;
export const {addRow,addCol} = sizeSlice.actions;