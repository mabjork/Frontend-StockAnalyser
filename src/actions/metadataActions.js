import {metadataConstants} from "../constants/metadataConstants";
import {metadataService} from "../services/metadataService";

export const metadataActions = {
    fetchMetadata
};
function fetchMetadata() {
    return dispatch => {
        dispatch(request());
        metadataService.getMetadata()
            .then(
                metadata => {
                    dispatch(success(metadata))
                },error => {
                    dispatch(failure(error))
                })

    };
    function request() { return { type: metadataConstants.FETCH_METADATA_REQUEST} }
    function success(metadata) { return { type: metadataConstants.FETCH_METADATA_SUCCESS,metadata} }
    function failure(error) { return { type: metadataConstants.FETCH_METADATA_FAILURE, error } }
}