(function runAction( /*GlideRecord*/ current, /*GlideRecord*/ event, /*EmailWrapper*/ email, /*ScopedEmailLogger*/ logger, /*EmailClassifier*/ classifier) {


    if (email.subject.startsWith("Re:") == false) {
        current.u_requestor = gs.getUserID();
        current.comments = "received from: " + email.origemail + "\n\n" + email.body_text;
        current.short_description = email.subject;

        current.state = 1;
        current.contact_type = "email";

        if (email.body.assign != undefined)
            current.assigned_to = email.body.assign;

        //     if (email.importance != undefined) {
        //         if (email.importance.toLowerCase() == "high") {
        //             current.impact = 1;
        //             current.urgency = 1;
        //         }
        //     }

        current.insert();
    }



})(current, event, email, logger, classifier);