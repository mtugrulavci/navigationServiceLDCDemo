import { LightningElement, api } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'

export default class NavigationServiceLDCDemo extends NavigationMixin(LightningElement) {
    @api recordId;

    navigateToNewRecordPage(){
        this[NavigationMixin.Navigate]({
            type: "standard__recordPage",
            attributes:{
                "recordId":this.recordId,
                "objectApiName":"Account",
                "actionName":"new"
            }
        });
    }
    navigateToEditRecordPage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes:{
                'recordId':this.recordId,
                'objectApiName':'Account',
                'actionName':'edit'
            }
        });
    }
    navigateToViewRecordPage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes:{
                'recordId':this.recordId,
                'objectApiName':'Account',
                'actionName':'view'
            }
        });
    }
}