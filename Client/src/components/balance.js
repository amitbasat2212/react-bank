
import '../Style/balance.css'
export default function Balance(props){        
    return(        
        <div className={(props.balance.balance_amount<0 ? 'negative' : 'positive')}>balance :{props.balance.balance_amount}</div>
    )
}