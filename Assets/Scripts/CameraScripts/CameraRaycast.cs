using System.Collections;
using System.Collections.Generic;
using UnityEditor.Experimental.GraphView;
using UnityEngine;

// INTENT: Casts spheres as Raycaster to catch the Wall GameObject. Returns those references 
//         for an array. A shader is applied to these GameObjects/GameObjects are hidden
//         in scene'
//         Source: https://docs.unity3d.com/ScriptReference/Physics.SphereCast.html
//         Source: https://discussions.unity.com/t/solved-how-to-change-material-properties-at-runtime/589377
public class CameraRaycast : MonoBehaviour
{
    // Raycast spehere
    // GameObject array of some kind
    List<GameObject> hitWalls = new List<GameObject>();

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        // cast Raycast
        if (hitWalls.Count == 0)
        {
            RaycastSphere();
        }
        else
        {
            ColourWalls();
            EmptyList();
        }
    }

    // Raycaster
    void RaycastSphere()
    {
        RaycastHit hit;

        if (!Physics.
            SphereCast(transform.position, 2f, transform.parent.Find("body").position, out hit,
            Vector3.Distance(transform.position, transform.parent.Find("body").position)))
        {
            return;
        }
        else
        {
            GameObject checkObject = hit.collider.gameObject;
            if (checkObject.tag != "Wall")
            {
                return;
            }
            else
            {
                // Catches GameObjects and puts them in an array(?)
                hitWalls.Add(checkObject);
            }
        }
    }

    void EmptyList()
    {
        hitWalls.Clear();
    }
    void ColourWalls()
    {
        if (hitWalls.Count > 0)
        {
            if (hitWalls[0].GetComponent<MeshRenderer>().material.name == "Default-Material")
            {
                for (int i = 0; i < hitWalls.Count; i++)
                {
                    hitWalls[i].GetComponent<MeshRenderer>().material = "Assets/Materials/material_guide-for-testing_red.mat";
                }
            }
            else
            {
                for(int i = 0;i < hitWalls.Count; i++)
                {
                    hitWalls[i].GetComponent<Material>().color = Color.red;
                }
            }
        }
    }
}
