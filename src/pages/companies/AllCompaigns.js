import CompainForm from "../../components/compain/CompainForm";
import {useEffect} from "react";
import CompainTable from "../../components/compain/CompainTable";
import Error from "../../components/Error";
import CommonContainer from '../../components/CommonContainer';
import { Button } from 'react-bootstrap';
import CommonModal from '../../components/CommonModal';
import { createCampaign, fetchCampaigns, removeCampaign, updateCampaign } from "../../store/thunks/campaignThunk";
import { editCampaign, setCampaign } from "../../store/slices/campaignSlice";
import { setError, toggleModal } from "../../store";
import { useDispatch, useSelector } from "react-redux";


function AllCampaigns() {
    const dispatch = useDispatch()

    const {campaigns, error, loading, campaign} = useSelector(state => state.campaigns)

    const {modal} = useSelector(state =>  state.form)

    useEffect(() => {dispatch(fetchCampaigns())}, [dispatch]);
    
    const modalTitle = modal == "edit" ? "Редактировать компанию" : "Создать компанию"
   
   return (<>
    <CommonModal title={modalTitle} show={modal !== "off"} setShow={() => dispatch(toggleModal("off"))}>
        {modal === "add" && <CompainForm type="Добавить" form={campaign} setForm={(v) => dispatch(setCampaign(v))} onAction={() => dispatch(createCampaign(campaign))}/>}
        {modal === "edit" && <CompainForm type="Обновить" form={campaign} setForm={(v) => dispatch(setCampaign(v))} onAction={() => dispatch(updateCampaign(campaign))}/>}
    </CommonModal>
    
    <CommonContainer title="Компании">
        {error && <Error onClose={()=> dispatch(setError(null))} title={error.title}> {error.text}</Error>}
                <Button onClick={() => dispatch(editCampaign())} variant="secondary" className="m-2">Добавить</Button>
                <CompainTable campaigns={campaigns} onDelete={(id) => dispatch(removeCampaign(id))} onEdit={(id) => dispatch(editCampaign(id))}/>
    </CommonContainer>
    </>)
}

export default AllCampaigns;