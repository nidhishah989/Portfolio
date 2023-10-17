import React from "react";
import "../style/page.css";
function Page(){

    return (
        <div className="page" id="page_section">
            <div className="main_sec">
            <div class="tab-content">
                <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab" tabindex="0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas saepe tempora vero commodi alias vel impedit quas a necessitatibus rem voluptatibus id, ab dolore nostrum odit placeat tenetur, earum fugiat?</div>
                <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab" tabindex="0"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur ducimus sunt modi repellendus exercitationem doloremque vitae minima consequuntur omnis enim est, velit commodi, optio rem magni quam blanditiis harum. Cupiditate. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit consectetur dolorem doloremque, quasi eum ipsam aperiam deserunt ullam, perferendis suscipit quos commodi porro maiores eaque. Blanditiis id error voluptatem cumque.</div>
                <div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab" tabindex="0">...</div>
                <div class="tab-pane" id="settings" role="tabpanel" aria-labelledby="settings-tab" tabindex="0">...</div>
            </div>
          </div>
        </div>
    )
}

export default Page;