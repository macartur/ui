NAPP UI
#######


UI Structure
************

To create a new component to your napp , you should create a file in your napp
repository, for example: ``ui/menu-items/main.kytos``. With this file the kytos
core will identify your component and send this to the interface.

``menu-items`` is the position where your component will be fixed.
``main.kytos`` is an example of component file, you can add others files and
the core will use that like your napp component.


List of component positions
===========================

- **menu-items**: the component will be fixed in to the left kytos-menu-bar.

Structure of a Napp Component
*****************************

A component structure is showed below and you can fill that using kytos
components.


.. code-block:: html

   <template>
    <!-- This template tag is optional -->
    <div class="kytos-menu-item"  icon="my_icon" tooltip="Sample Tooltip">
     <kytos-accordion>
      <kytos-accordion-item title="Custom Labels">
       <!-- You could put yours kytos elements here -->
      </kytos-accordion-item>
     </kytos-accordion>
    </div>
   </template>

    <script>
    /* All the javascript methods are optional */
    module.exports = {
      methods: {
        // put your javascript methods here
      },
      data: function(){
        return {
          //put your data here
        }
      }
    }
    </script>

    <style>
      /* This style tag is optional */
      /* You could put your css style here */
    </style>


You should replace the **my_icon** to an **awesome icon**, tha the kytos
interface will find that icon and create a new button into the left of
**kytos-menu-bar**. **kytos-menu-bar**.  You can replace the string **Sample
Tooltip** to show in your **kytos-menu-bar** button.


Sample Components
******************

Status-Component
================

Below we have a ``ui/menu-items/status-component.kytos`` file. This component
was build to request the kytos server and get all napps informations and
display that into the component.


.. code-block:: html

    <template>
     <kytos-context-panel v-if="expanded">
      <kytos-accordion >
        <kytos-accordion-item title="Installed NApps">
          <kytos-property-panel>
            <kytos-property-panel-item v-if="napps"
              v-for="napp in this.napps" :key="napp.name"
              :name="napp.name" :value="napp.version">
            </kytos-property-panel-item>
          </kytos-property-panel>
        </kytos-accordion-item>
      </kytos-accordion>
     </kytos-context-panel>
    </template>
    <script>
    module.exports = {
      methods: {
        update_napps (){
          var self = this
          $.ajax({
            async: true,
            dataType: "json",
            url: this.$kytos_server_api + "kytos/status/v1/napps",
            success: function(data) {
              self.napps = data['napps']
            }
          });
        }
      },
      mounted: function() {
        setTimeout(this.update_napps, 1000);
      },
      data: function(){
        return {
          napps: []
        }
      }
    }
    </script>
