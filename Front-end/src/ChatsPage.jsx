import {
    MultiChatSocket,
    MultiChatWindow,
    useMultiChatLogic,
  } from 'react-chat-engine-advanced';
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '093a8283-a592-4cfd-80d8-160ea9949300',
        props.user.username,
        props.user.secret
      );
    return(
        <div style={{height:'100vh'}}>
    
          <MultiChatSocket {...chatProps} />
          <MultiChatWindow {...chatProps}  style={{height:'100%'}} />

        </div>
    ) ;
  };
  export default ChatsPage;