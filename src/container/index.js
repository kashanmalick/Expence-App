import './style.css'
import ExpanceTrack from '../components/heading'
import SelectTextFields from '../components/currency'

function FullPage() {
    return (
        <div className="mainDiv">
            <ExpanceTrack />
            <SelectTextFields />
        </div>
    )
}

export default FullPage;