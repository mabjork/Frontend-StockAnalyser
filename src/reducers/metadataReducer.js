import {metadataConstants} from "../constants/metadataConstants";

export default function metadata(state={},action) {
    switch (action.type){
        case metadataConstants.FETCH_METADATA_REQUEST:
            return{
                ...state,
                fetching:true
            };
        case metadataConstants.FETCH_METADATA_FAILURE:
            return{
                ...state,
                fetching:false,
                error:action.error
            };
        case metadataConstants.FETCH_METADATA_SUCCESS:
            return{
                ...state,
                fetching:false,
                data:action.metadata
            }
        default:
            return{
                ...state
            }
    }
}