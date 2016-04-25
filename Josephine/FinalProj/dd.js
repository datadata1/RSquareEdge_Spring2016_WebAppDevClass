console.log("cloudant");
var textA = $('#textA');

var cloudantEndpoint = 'https://datadata1.cloudant.com/class3/Students';

/*$.ajax({
  url: cloudantEndpoint,
  type: 'GET',
  contentType: 'application/json; charset=UTF-8',
  xhrFields: {
    withCredentials: true
  },
  success: function (response) {
    var textA = $('#textA');
    var textB = $('#textB');
    var textC = $('#textC');
    //look at response
    console.log('A', typeof response);
    //turn response into an object
    var obj = JSON.parse(response);
    
    //look at the object
    console.log('B', obj);
    //access the objects through keys and values
    textA.text(obj.student[0].fname + " " + obj.student[0].lname);
    textB.text(obj.student[1].fname);
   // textC.text(obj.student[2].fname);
    console.log(obj.name);
    console.log(textB);
    console.log('C', response);

  },
});*/

       $.ajax({
  url: cloudantEndpoint,
  type: 'GET',
  contentType: 'application/json; charset=UTF-8',
  xhrFields: {
    withCredentials: true
  },
  success: function (response) {
            var org = $("#org").attr("value");
            var textC = $("#textC");
            var div1 = $("#div1");
            var obj = JSON.parse(response);  

           switch(org)
            {

            case "1":
            //testing with retrieval from cloudant...trying to display the data based on the drop down selections
           /*$.ajax({
            url: cloudantEndpoint,
              type: 'GET',
              contentType: 'application/json; charset=UTF-8',
              xhrFields: {
                withCredentials: true
              },
              success: function (response) {
                var textA = $('#textA');
                var textB = $('#textB');

                var obj = JSON.parse(response);

                textA.text(obj.student[0].fname + " " + obj.student[0].lname);
                textB.text(obj.student[1].fname);


              },
            });*/
             
             // div1.text("Find more information about the App Development course by selecting a filter");
              textC.text(obj.student[2].fname);

              break;
            case "2":
              div1.html("Find more information about the Javascript course by selecting a filter");
              break;
            case "3":
              div1.html("Find more information about the SQL course by selecting a filter");
              break;
            case "4":
              div1.html("Find more information about the Web course by selecting a filter");
              break;
            case "5":
              div1.html("Find more information about the XML course by selecting a filter");
              break;
            default:
              div1.html("Select Course");
            }
            $("#div2").fadeOut(300);
            textC.fadeIn(300);
        },
});


        
        function TerritoryDetails(){
            var terr = $("#terrSelect").attr("value");
            var div = $("#div2");

            div.fadeIn(300);
            $("#textC").slideUp(300);//hide organization (optional)
           switch(terr)
            {
            case "1":
              div.html("App Dev price output");
              break;
            case "2":
              div.html("App Dev students output");
              break;
            case "3":
              div.html("JS course price output");
              break;
            case "4":
              div.html("JS students output");
              break;
            case "5":
              div.html("SQL course price output");
              break;
            case "6":
              div.html("SQL students output");
              break;
            case "7":
              div.html("Web course price output");
              break;
            case "8":
              div.html("Web students output");
              break;
            case "9":
              div.html("XML course price output");
              break;
            case "10":
              div.html("XML students output");
              break;
            default:
              div.html("Select Filter");
            }
        }
        

        
        
        function cascadeSelect(parent, child){
                var childOptions = child.find('option:not(.static)');
                    child.data('options',childOptions);
    
                parent.change(function(){
                    childOptions.remove();
                    child
                        .append(child.data('options').filter('.sub_' + this.value))
                        .change();
                })
    
                childOptions.not('.static, .sub_' + parent.val()).remove();

        }
        
        $(function(){
            cascadeForm = $('.cascadeTest');
            orgSelect = cascadeForm.find('.orgSelect');
            terrSelect = cascadeForm.find('.terrSelect');
            locSelect = cascadeForm.find('.locSelect');
            
            cascadeSelect(orgSelect, terrSelect);
            cascadeSelect(terrSelect, locSelect);
        });

        

  //  </script>