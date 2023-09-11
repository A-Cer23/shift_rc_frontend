import { Component } from "react";
import { withRouter } from "../common/with-router";
import ShiftReportService from "../services/shift_report_service";


class PayPeriodResult extends Component {

    constructor(props) {
        super(props);
        this.state = {
            totalHourlyWage: "",
        }
    }

    componentDidMount() {
        ShiftReportService.payPeriodRequest(this.props.location.state.fromDate, 
            this.props.location.state.toDate, 
            this.props.location.state.hourlyWage)
            .then(response => {
                this.setState({
                    totalHourlyWage: response.data.totalHourlyWage
                })
            })
    }

    render() {
        return (
            <div className="text-light">
                <h1>Pay Period Result</h1>
                <p>From: {this.props.location.state.fromDate}</p>
                <p>To: {this.props.location.state.toDate}</p>
                <p>Hourly Wage: {this.props.location.state.hourlyWage}</p>
                <p>Total Hourly Wage: {this.state.totalHourlyWage}</p>
            </div>
        )
    }
}

export default withRouter(PayPeriodResult);