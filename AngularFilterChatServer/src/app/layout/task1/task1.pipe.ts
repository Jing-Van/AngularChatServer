import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'filter'

})

@Injectable()
export class FilterPipe implements PipeTransform {

    transform(items: Array<any>, filter: {[field: string]: any}): Array<any> {

    	console.log("filter");
    	console.log(filter);
        if(!items || !filter ) {
     		return items;
    	}


        return items.filter(item => {
            for (let field in filter) {
            	// todo: 
            	// two version of the filter here depends on the way empty string is treated
            	// If filter field is empty, treat it maybe in a different way
            	//if (item[field] !== filter[field && item[field] !== "") {
                if (item[field] !== filter[field]) {
                	//console.log("field");
                	//console.log(filter[field]);
                	//console.log(filter[field] === "");
                    return false;
                }
            }
            return true;
        });
    }

}
