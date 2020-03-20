# 4oie
Universal guide page for upgrading older versions of Internet Explorer

## Usage

Add the following code snippet to your HTML code(inside the body tag):

```
<!--[if lt IE 9]>
<script>
!function(body) {
	body.style.width = body.style.height = '100%';
	body.parentNode.style.overflow = body.style.overflow = 'hidden';
}(document.body);
</script>
<iframe src="//4oie.mrluo.life/" frameborder="0" scrolling="no" style="position: absolute; width: 100%; height: 100%; left: 0; top: 0; z-index: 99999;"></iframe>
<![endif]-->
```