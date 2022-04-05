import { useOutletContext, useParams } from "react-router-dom";
import { Card } from "antd";
// const { Meta } = Card;


export default function Application({ appData }) {
    let [selectedApp, setSelectedApp] = useOutletContext();
    const { id } = useParams()
    console.log('url id:', id)
    console.log(appData[0])
  
    // id =  '/my-react-portfolio/' + {id}
    // const app = selectedApp;
    // setSelectedApp = appData[0]
    // // console.log(app)
    // console.log(selectedApp)
    // console.log(setSelectedApp)
    const display = selectedApp ? (
      <a href={selectedApp.url}>
        <h1 className="app-title">{selectedApp.title}</h1>
        <Card
          key={selectedApp.id}
          hoverable
          // style={{ width: 240 }}
          cover={
            <img className="app-img" alt={selectedApp.title} src={selectedApp.imageSrc} />
          }
        >
        </Card>
        </a>
      ) : (
        <a href={appData[0].url}>
          <h1 className="app-title">{appData[0].title}</h1>
          <Card
            key={appData[0].id}
            hoverable
            // style={{ width: 240 }}
            cover={
              <img className="app-img" alt={appData[0].title} src={appData[0].imageSrc} />
            }
          >
          </Card>
          </a>
        )
  
      return display
  }
