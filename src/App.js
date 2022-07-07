import logo from './logo.svg';
import './App.css';
import PriceCard from './PriceCard';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  let produts = [
    {
      title:"FREE",
      price:0,
      features:[
        {
          name:"Single User",
          isEnable:true,
          tick:true
          
        },
        {
          name:"5GB Storage",
          isEnable:true,
          tick:true
        },
        {
          name:"Unlimited Public Projects",
          isEnable:true,
          tick:true
        },
        {
          name:"Community Access",
          isEnable:true,
          tick:true
        },
        {
          name:"Unlimited Private Projects",
          isEnable:false,
          tick:false
        },
        {
          name:"Dedicated Phone Support",
          isEnable:false,
          tick:false
        },
        {
          name:"Free Subdomain",
          isEnable:false,
          tick:false
        },
        {
          name:"Monthly Status Reports",
          isEnable:false,
          tick:false
        },
        ]
    },
    {
      title:"PLUSE",
      price:9,
      features:[
        {
          name:"5 Users",
          isEnable:true,
          tick:true
        },
        {
          name:"50GB Storage",
          isEnable:true,
          tick:true
        },
        {
          name:" Unlimited Public Projects",
          isEnable:true,
          tick:true
        },
        {
          name:"Community Access",
          isEnable:true,
          tick:true
        },
        {
          name:"Unlimited Private Projects",
          isEnable:true,
          tick:true
        },
        {
          name:"Dedicated Phone Support",
          isEnable:true,
          tick:true
        },
        {
          name:"Free Subdomain",
          isEnable:true,
          tick:true
        },
        {
          name:"Monthly Status Reports",
          isEnable:false,
          tick:false
        },
        ]
    },
    {
      title:"PRO",
      price:49,
      features:[
        {
          name:"Single User",
          isEnable:true,
          tick:true
        },
        {
          name:"150GB Storage",
          isEnable:true,
          tick:true
        },
        {
          name:"Unlimited Public Projects",
          isEnable:true,
          tick:true
        },
        {
          name:"Community Access",
          isEnable:true,
          tick:true
        },
        {
          name:"Unlimited Private Projects",
          isEnable:true,
          tick:true
        },
        {
          name:"Dedicated Phone Support",
          isEnable:true,
          tick:true
        },
        {
          name:"Unlimited Free Subdomain",
          isEnable:true,
          tick:true
        },
        {
          name:"Monthly Status Reports",
          isEnable:true,
          tick:true
        },
        ]
    },
    
  ]
  return (
    <section className="pricing py-5">
  <div className="container">
    <div className="row">
{produts.map((card)=>{
  return(<PriceCard data={card}></PriceCard>)
}
)
}
    </div>
    </div>
    </section>
    );
}

export default App;
