import { PageHeader } from 'antd';
import '../../../public/css/index.css'

ReactDOM.render(
  <PageHeader
    className="site-page-header"
    onBack={() => null}
    title="Title"
    subTitle="This is a subtitle"
  />,
  mountNode,
);

