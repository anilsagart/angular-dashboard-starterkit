// export interface IDashBoardDataMOdel{
//     cluster:ICardDataModel;
//     workLoads:ICardDataModel;
//     Alerts:ICardDataModel;
//     NameSpaces:ICardDataModel;

// }

// export interface ICardDataModel{
//     header:string;
//     data:string;
//     width:number;
//     height:number;
//     color:number;
// }

export const dashBoardCardDataModel = {
  cluster: {
    header: 'Clusters',
    data: 1,
    width: '500px',
    height: '20vh',
    color: '#e6e6ff',
  },
  workloads: {
    header: 'Workloads',
    data: 1,
    width: '500px',
    height: '20vh',
    color: '#e6e6ff',
  },
  alerts: {
    header: 'Alerts',
    data: {
      alertHeading:"EksCluster",
      alertDesc:"[NodeDiskUsagePrediction]Node:ip-10-0-5-189.us-east-2.compute.internal Disk will fill in next 24 hours",
      timeLine:"2 hours ago"
    },
    width: '500px',
    height: '20vh',
    color: '#ffffcc',
  },
  namespaces: {
    header: 'Namespaces',
    data: 0,
    width: '500px',
    height: '20vh',
    color: '#e6e6ff',
  },
  blueprints: {
    header: 'Blueprints',
    data: 0,
    width: '500px',
    height: '20vh',
    color: '#e6e6ff',
  },
  auditLog: {
    header: 'Audit Log',
    data: 0,
    width: '500px',
    height: '48.8vh',
    color: '#ffffcc',
  },
  pods: {
    header: 'Pods',
    data: 152,
    width: '500px',
    height: '20vh',
    color: '#e6e6ff',
  },
  violations: {
    header: 'Violations',
    data: 1,
    width: '500px',
    height: '20vh',
    color: '#e6e6ff',
  },
  cloudCredentials: {
    header: 'Cloud Credentials',
    data: 1,
    width: '500px',
    height: '30vh',
    color: '#e6e6ff',
  },
  resourceUtilization: {
    header: 'Resource Utilization',
    data: 1,
    width: '500px',
    height: '30vh',
    color: '#e6e6ff',
  },
  clusterDistribution: {
    header: 'Cluster Distribution',
    data: [
      {
        tabHeading: 'K8B Verions',
        tableData: [
          {
            left: 'v1.20.25ecxec',
            right: '40',
          },
          {
            left: 'v1.20.25ecxec',
            right: '60',
          }
        ]
      },
      {
        tabHeading: 'ENVIRONMENTS',
        tableData: [
          {
            left: 'v1.20.25ecxec',
            right: '40',
          }
        ]
      },
      {
        tabHeading: 'BLUEPRINTS',
        tableData: [
          {
            left: 'v1.20.25ecxec',
            right: '40',
          }
        ]
      }
    ],
    width: '500px',
    height: '30vh',
    color: '#e6e6ff',
  },
  workDistribution: {
    header: 'Work Distribution',
    data: 1,
    width: '500px',
    height: '30vh',
    color: '#e6e6ff',
  },
  topClusters: {
    header: 'Top Clusters',
    data: [
      {
        tabHeading: 'BY CPU',
        tableData: [
          {
            left: 'v1.20.25ecxec',
            right: '40',
          },
          {
            left: 'v1.20.25ecxec',
            right: '60',
          }
        ]
      },
      {
        tabHeading: 'BY MEMORY',
        tableData: [
          {
            left: 'v1.20.25ecxec',
            right: '40',
          }
        ]
      }
    ],
    width: '500px',
    height: '20vh',
    color: '#e6e6ff',
  },
  topNameSpaces: {
    header: 'Top NameSpaces',
    data: [
      {
        tabHeading: 'BY PODS',
        tableData: [
          {
            left: 'v1.20.25ecxec',
            right: '40',
          }
        ]
      }
    ],
    width: '500px',
    height: '20vh',
    color: '#e6e6ff',
  },
  topUsers: {
    header: 'Top Users',
    data: 1,
    width: '500px',
    height: '20vh',
    color: '#e6e6ff',
  },
  topAlerts: {
    header: 'Top Alerts',
    data: [
      {
        tabHeading: 'BY TYPE',
        tableData: [
          {
            left: 'v1.20.25ecxec',
            right: '40',
          }
        ]
      }
    ],
    width: '500px',
    height: '20vh',
    color: '#e6e6ff',
  },
};

export const clusterData= {
  "ClusterDetails":
[
  "ap-south-1",
  [],
  "eu-north-1",
  [],
  "eu-west-3",
  [],
  "eu-west-2",
  [],
  "eu-west-1",
  [],
  "ap-northeast-3",
  [],
  "ap-northeast-2",
  [],
  "ap-northeast-1",
  [],
  "ca-central-1",
  [],
  "sa-east-1",
  [],
  "ap-southeast-1",
  [],
  "ap-southeast-2",
  [],
  "eu-central-1",
  [],
  "us-east-1",
  [
      {
          "ClusterName": [
              "VuNet-EKS"
          ],
          "Status": [
              "ACTIVE"
          ],
          "PlatformVersion": [
              "eks.6"
          ],
          "NodeGroups": [
              "VuNet-EKS-Node",
              "0"
          ]
      }
  ],
  "us-east-2",
  [
      {
          "ClusterName": [
              "EksCluster"
          ],
          "Status": [
              "ACTIVE"
          ],
          "PlatformVersion": [
              "eks.6"
          ],
          "NodeGroups": [
              "managed_node_group",
              "managed_node_group_2",
              "2",
              "5"
          ]
      },
      {
          "ClusterName": [
              "ekscluster-default"
          ],
          "Status": [
              "ACTIVE"
          ],
          "PlatformVersion": [
              "eks.6"
          ],
          "NodeGroups": [
              "ekscluster-default-node",
              "4"
          ]
      },
      {
          "ClusterName": [
              "testekscluster-testingws"
          ],
          "Status": [
              "ACTIVE"
          ],
          "PlatformVersion": [
              "eks.5"
          ],
          "NodeGroups": [
              "eksnode-testingws",
              "2"
          ]
      }
  ],
  "us-west-1",
  [],
  "us-west-2",
  []
]
};