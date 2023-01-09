import {createSlice} from "@reduxjs/toolkit"
import { nanoid } from "nanoid"


//hold row ids and 
export const sizeSlice = createSlice({
    name:"size",
    initialState:{

        rowIds:[],
        colIds:[],
        colWidth:{}
    },
    reducers:{

        addToRowIds:state=>{
            let id = nanoid(5);
            state.rowIds = [...state.rowIds,id];
        },
        addToColIds:state=>{
            let id = nanoid(5);
            state.colIds = [...state.colIds,id];
        },
        adjustColWidth:(state,action)=>{
            state.colWidth.col = action.payload.col;
            state.colWidth.width = action.payload.width;
        }
    }
    

})



export const selectRowIds = (state)=>{
    return state.size.rowIds;
}

export const selectColIds = (state)=>{
    return state.size.colIds;
}

export const selectColWidth = (state)=>{
    return state.size.colWidth;
}
export default sizeSlice.reducer;
export const {addToRowIds,addToColIds,adjustColWidth} = sizeSlice.actions;