import './style.scss'
import Comments from './Comments'
import React from 'react'

class Site extends React.Component {
    render() {
        return (
            <div className="site-page">
                <div className={'content'}>
                    <h1>Article title</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus efficitur eleifend est. Quisque elementum
                        sagittis nibh, faucibus tempor purus. Vestibulum congue
                        lacinia massa, at hendrerit dolor rutrum vitae. Nulla in
                        eros ut tellus semper consequat. Aenean ultricies neque
                        ac quam vehicula, quis dictum libero auctor. Ut a nulla
                        quis libero tincidunt mattis. Nam eu est erat. Nunc ac
                        tempus elit. Pellentesque a ullamcorper nisi. Sed
                        faucibus tortor feugiat orci aliquam sagittis. Nam
                        viverra leo in massa euismod, aliquam dictum ligula
                        tincidunt. Suspendisse at iaculis tellus, vitae maximus
                        tortor.
                    </p>
                    <p>
                        Vestibulum eu tellus mauris. Nullam blandit ipsum at
                        ligula ultrices rhoncus. Donec placerat sem vehicula
                        quam tempus rutrum. Fusce sem nulla, malesuada vitae
                        tempus non, ullamcorper egestas nisl. Phasellus
                        scelerisque congue egestas. Donec gravida enim sit amet
                        tortor facilisis tristique. Proin quis eleifend leo.
                        Nulla ex nisl, finibus quis feugiat sit amet, tincidunt
                        et nulla. Morbi semper nibh eu metus pellentesque, in
                        pellentesque ante aliquam. Pellentesque vitae ligula
                        nunc. In pretium elit sapien, quis venenatis nisi cursus
                        at. Fusce rhoncus, sem id ullamcorper pharetra, nibh
                        tellus ultrices justo, quis hendrerit sem magna at
                        magna.
                    </p>
                    <p>
                        Integer ultrices quis leo vel tristique. In ornare
                        tortor ipsum, a tristique turpis euismod at. Aliquam
                        augue erat, consectetur laoreet lorem ut, blandit
                        ullamcorper arcu. Fusce pulvinar, erat vitae aliquam
                        convallis, ligula mauris consectetur ex, eget rutrum
                        lacus lacus eu turpis. Integer in enim massa. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer vehicula condimentum orci, lacinia dapibus massa
                        rutrum sed. Vestibulum ante ipsum primis in faucibus
                        orci luctus et ultrices posuere cubilia Curae; Fusce
                        neque eros, fringilla tempus sem sed, eleifend dapibus
                        lorem.
                    </p>
                </div>
                <Comments />
            </div>
        )
    }
}

export default Site
