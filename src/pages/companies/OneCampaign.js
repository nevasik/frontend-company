import {useEffect, useState,} from "react";
import {useParams} from "react-router-dom";
import CommonContainer from "../../components/CommonContainer";
import { Button, Col, Image, ProgressBar, Row } from "react-bootstrap";
import { getCampaign } from "../../store/thunks/campaignThunk";
import { useDispatch, useSelector } from "react-redux";
import CampaignStatistics from "../../components/CampaignStatistics";
import { getRandomNumber } from "../../utils/math";
import MyCard from "../../components/MyCard";

function OneCampaign() {
    const [progress, setProgress] = useState(0)

    const startProgress = () => {
        const interval = setInterval(() => {
            setProgress(p => {  
                if (p >= 100) {
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
     <CommonContainer title={`О компании:  ${campaign.name}`}>
        <Row>
            <Col></Col>
            <Col xs="8">
                <MyCard campaign={campaign} progress={progress} startProgress={startProgress}/>
                {progress > 0 && progress <=100 && <ProgressBar now={progress} label={progress + "%"}/>}
                {progress >= 100 && <> <h2 className="text-center">Статистические данные</h2>  <CampaignStatistics campaign={campaign}/> </>}
            </Col>
            <Col></Col>
        </Row>
        
         
    </CommonContainer> 
}
export default OneCampaign;