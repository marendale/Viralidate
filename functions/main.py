from firebase_functions import https_fn, options
import firebase_admin
import json
import pandas as pd
from sklearn.tree import DecisionTreeClassifier, _tree
import numpy as np


if len(firebase_admin._apps) == 0:
    firebase_admin.initialize_app()


@https_fn.on_request(cors=options.CorsOptions(cors_origins="*", cors_methods=["get", "post"]))
def model_test(req: https_fn.Request) -> https_fn.Response:
    data = req.get_json()
    age = data["data"]["age"]
    sex = data["data"]["sex"]

    df = pd.read_csv('gs://viralidate-13e3f.appspot.com/data.csv')

    filtered_df = df[df["AGER"]==age]
    filtered_df = filtered_df[filtered_df["SEX"]==sex]

    y = filtered_df["DIAG1"]

    X = filtered_df.drop(columns=["DIAG1", "AGER", "SEX"])

    clf = DecisionTreeClassifier(max_depth=32)

    clf.fit(X, y)

    feature_names = list(X)

    def tree_to_json(decision_tree, feature_names=None):
        
        tree_ = decision_tree.tree_
        feature_name = [
            feature_names[i] if i != _tree.TREE_UNDEFINED else "undefined!"
            for i in tree_.feature
        ]
        def recurse(node):
            if tree_.feature[node] != _tree.TREE_UNDEFINED:
                name = feature_name[node]
                threshold = tree_.threshold[node]
                left = recurse(tree_.children_left[node])
                right = recurse(tree_.children_right[node])
                return {"symptom": name, "no": left, "yes": right}
            else:
                value = np.argmax(tree_.value[node].tolist())
                return {"disease": decision_tree.classes_[value]}
        
        return recurse(0)

    tree_json = tree_to_json(clf, feature_names)
    #json_str = json.dumps(tree_json, indent=2)
    response = {
        "data": tree_json
    }
    return https_fn.Response(json.dumps(response))