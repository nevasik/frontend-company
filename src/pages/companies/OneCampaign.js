import {useEffect, useState,} from "react";
import {useParams} from "react-router-dom";
import CommonContainer from "../../components/CommonContainer";
import { Button, Image, ProgressBar } from "react-bootstrap";
import { getCampaign } from "../../store/thunks/campaignThunk";
import { useDispatch, useSelector } from "react-redux";
import CampaignStatistics from "../../components/CampaignStatistics";
import { getRandomNumber } from "../../utils/math";

function OneCampaign() {
    const [progress, setProgress] = useState(0)

    const startProgress = () => {
        const interval = setInterval(() => {
            setProgress(p => {
                if (p === 100) {
                    clearInterval(interval)
                }
                return p + getRandomNumber(3, 20)
            })
            
        }, 500)
    }
    const {id} = useParams()
    const dispatch = useDispatch()

    const {campaign, loading, error} = useSelector(state => state.campaigns)

    useEffect(() => { dispatch(getCampaign(id))}, [dispatch]);

    return campaign &&
     <CommonContainer title={`О компании:  ${campaign.firstName} ${campaign.secondName} ${campaign.lastName}`}>
         <Image className="m-1" src={campaign.avatar} fluid />
         {!progress && <Button onClick={startProgress}>Показать статистику</Button>}
         {progress > 0 && progress <=100 && <ProgressBar now={progress} label={progress + "%"}/>}
         {progress >= 100 && <CampaignStatistics />}
    </CommonContainer> 
}
export default OneCampaign;