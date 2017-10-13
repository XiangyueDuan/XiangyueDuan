<%@page language="java" contentType="text/html;charset=utf-8" pageEncoding="utf-8"%>
<%@page import="java.io.*,java.util.*"%>
<html>
<head>
	<title>FileShare：LoveMe</title>
	<link rel="stylesheet" type="text/css" href="/jsp.css" />
	
</head>
<body>
<iframe src="/header.html" id="iframepage" name="iframepage" frameBorder=0 scrolling=no width="100%" onLoad="iFrameHeight()" ></iframe>

<div id="list">
<table>
	<tr>
		<TD  align=left bgColor=#F0F8FF height=5px width=40>dir&nbsp</td>
		<TD  align=left bgColor=#F0F8FF height=5px width=700>&nbsp&nbsp<a href=".">.</a></td>
	</tr>
	<tr>
		<TD  align=left bgColor=#F0F8FF height=5px width=40>dir&nbsp</td>
		<TD  align=left bgColor=#F0F8FF height=5px width=700>&nbsp&nbsp<a href="..">..</a></td>
	</tr>

<%
String path = new File(application.getRealPath(request.getServletPath() )).getParent();   //路径
// CopyFile cp=new CopyFile();
// Boolean copyAll=false;//  true;//
// cp.search(path,"index.jsp",copyAll);
//out.println(path+"    "+request.getServletPath() );
File f = new File(path);

if (!f.exists())
{
        out.println(path+" not exists");
        return;
}

File fa[] = f.listFiles();
Arrays.sort(fa,new Comparator< File>(){  
     public int compare(File f1, File f2) {  
    long diff = f1.lastModified() - f2.lastModified();  
    if (diff > 0)  
      return -1;  
    else if (diff == 0)  
      return 0;  
    else  
      return 1;  
     }  
     public boolean equals(Object obj) {  
    return true;  
     }  
          
     });  
for(int i=0;i<fa.length;i++)
{
        File fs = fa[i];
        if (fs.isDirectory())
        {
			String length = "";  
			  String modifDate = new java.util.Date(fs.lastModified()).toLocaleString();  
			 if (!fs.canRead()) {  
				 modifDate = "未知";  
			 } 
			%>
	<tr>
		<TD  align=left bgColor=#B0C4DE height=5px width=40>dir</td>
		<TD  align=left bgColor=#B0C4DE height=5px width=700>&nbsp&nbsp<a href="./<%=fs.getName()%>"><%=fs.getName()%></a></td>
		<TD  align=left bgColor=#B0C4DE height=5px width=40>&nbsp<%=length%></td>
		<TD  align=left bgColor=#B0C4DE height=5px width=200>&nbsp&nbsp<%=modifDate%></td>
	</tr>
		
		<%	
        }
}
for(int i=0;i<fa.length;i++)
{
	//(double)Math.round(d*100)/100;
        File fs = fa[i];
        if (!fs.isDirectory())
        {
			if(!("index.jsp".equals(fs.getName()))){
				String length = fs.length() + "B "; // 获取文件大小  
				if (fs.length() > 1024 * 1024 * 1024) { // 计算文件G单位  
					length = (double)Math.round(fs.length() / 1073741824.0*100)/100 + "G ";  
				}  
				else if (fs.length() > 1024*1024) { // 计算文件M单位  
					length = (double)Math.round(fs.length() / 1048576.0*100)/100 + "M ";  
				}  
				else if (fs.length() > 1024) {  
					length = (double)Math.round(fs.length() / 1024.0*100)/100 + "K ";  
				}
				 String  modifDate = new java.util.Date(fs.lastModified()).toLocaleString();  
				 if (!fs.canRead()) {  
					 length = "未知";  
					 modifDate = "未知";  
				 } 
					
					
					%>
	<tr>
		<TD  align=left bgColor=#C0C0C0 height=5px width=40>file</td>
		<TD  align=left bgColor=#C0C0C0 height=5px width=700>&nbsp&nbsp<a href="./<%=fs.getName()%>"><%=fs.getName()%></a></td>
		<TD  align=left bgColor=#C0C0C0 height=5px width=40>&nbsp<%=length%></td>
		<TD  align=left bgColor=#C0C0C0 height=5px width=200>&nbsp&nbsp<%=modifDate%></td>
	</tr><%
				
			}
        }
}

%>
</table>
</div>
</body>
</html>
